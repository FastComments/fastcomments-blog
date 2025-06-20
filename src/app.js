const startTime = Date.now();

const fs = require('fs');
const path = require('path');
const marked = require('marked');
const handlebars = require('handlebars');
const feedGenerator = require('feed');
const byteSize = require('byte-size');
const prettyBytes = require('pretty-bytes');
const readingTime = require('reading-time');

const BLOG_START_YEAR_STR = '2019';
const CONTENT_DIR = path.join(__dirname, 'content');
const TEMPLATE_DIR = path.join(__dirname, 'templates');
const STATIC_GENERATED_DIR = path.join(__dirname, 'static/generated');
const STATIC_DIR = path.join(__dirname, 'static');

// Register Handlebars helpers
handlebars.registerHelper('toLowerCase', function(str) {
	return str ? str.toLowerCase() : '';
});

handlebars.registerHelper('replace', function(str, find, replace) {
	return str ? str.replace(new RegExp(find, 'g'), replace) : '';
});

handlebars.registerHelper('eq', function(a, b) {
	return a === b;
});

var posts = [];
var allCategories = new Set();
var categoryCounts = {};

fs.readdirSync(CONTENT_DIR).forEach(function(item) {
	const title = item.replace('\.md', '');
	const urlIdRaw = title.toLowerCase().replace(/ /g, '-') + '.html';
	const urlId = encodeURIComponent(urlIdRaw);
	const fullUrl = 'https://blog.fastcomments.com/' + urlId;
	const fullUrlRaw = 'https://blog.fastcomments.com/' + urlIdRaw;
	const commentCountHTML = `<div class="post-comment-count fast-comments-count" data-fast-comments-url-id="${fullUrlRaw}">...</div>`;

	let fileContent = fs.readFileSync(path.join(CONTENT_DIR, item), 'utf8');
	
	// Extract categories from the file content (look for [category:name] tags)
	const categoryRegex = /\[category:([^\]]+)\]/g;
	const categories = [];
	let categoryMatch;
	while ((categoryMatch = categoryRegex.exec(fileContent)) !== null) {
		const category = categoryMatch[1].trim();
		categories.push(category);
		allCategories.add(category);
		categoryCounts[category] = (categoryCounts[category] || 0) + 1;
	}
	
	// Remove category tags from content
	fileContent = fileContent.replace(categoryRegex, '');
	
	fileContent = fileContent.replace('[postlink]', `<a href="${urlIdRaw}">`); // using relative url here is better for local dev and won't make an SEO difference
	fileContent = fileContent.replace('[/postlink]', `</a>`);
	let html = marked.parse(fileContent);
	const postByteSize = byteSize(html.length).toString();

	const imageSrcs = html.match(/src\s*=\s*"?(.+?)["|\s]/g);
	let mediaSize = 0;
	if(imageSrcs) {
		for(const imageSrc of imageSrcs) {
			const localPath = imageSrc.substring(5, imageSrc.length - 1);
			if (!localPath.startsWith('http')) {
				mediaSize += fs.statSync(path.join(STATIC_DIR, )).size; // Would be nice to fix regex to not include src="
			}
		}
	}
	mediaSize = prettyBytes(mediaSize);
	const fileSizeString = imageSrcs ? `${postByteSize} - ${mediaSize}` : postByteSize;
	html = html.replace('[filesize]', fileSizeString);
	const readTime = readingTime(html).text;
	html = html.replace('[readtime]', readTime);

	const dateString = title.substring(1, title.indexOf(')'));
	const ctime = new Date(dateString);

	html = html.replace('[postdate]', ctime.toDateString() + '<br>' + commentCountHTML);

	const previewHTML = getCompiledPost(html, {
		isPost: false
	});

	html = getCompiledPost(html, {
		isPost: true
	});

	posts.push({
		html: html,
		previewHTML: previewHTML,
		title: title,
		urlId: urlId,
		urlIdRaw: urlIdRaw,
		fullUrl: fullUrl,
		fullUrlRaw: fullUrlRaw,
		dateTimeObj: ctime,
		dateTime: ctime.getTime(),
		minSize: postByteSize,
		mediaSize: mediaSize,
		fileSizeString: fileSizeString,
		hasMedia: !!imageSrcs,
		readTime: readTime,
		categories: categories
	});
});

posts.sort(function(a, b) {
	if(a.dateTime === b.dateTime) {
		return 0;
	}
	return a.dateTime > b.dateTime ? -1 : 1;
});

const feedGeneratorInstance = new feedGenerator.Feed({
	title: 'FastComments Blog',
	description: 'All things FastComments.com',
	id: 'https://blog.fastcomments.com',
	link: 'https://blog.fastcomments.com',
	language: 'en',
	copyright: 'All rights reserved 2019, FastComments LLC',
	updated: posts.length > 0 ? posts[0].dateTimeObj : null,
	author: {
		name: 'Devon Winrick'
	}
});

let footerYears = BLOG_START_YEAR_STR;
if(new Date().getFullYear() > 2019) {
	footerYears += ' - ' + new Date().getFullYear();
}

// Pagination configuration
const POSTS_PER_PAGE = 10;
const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

// Convert categories to sorted array
const categoriesArray = Array.from(allCategories).sort();

fs.readdirSync(TEMPLATE_DIR).forEach(function(item) {
	if(item === 'index.html') {
		// Generate main index page
		fs.writeFileSync(path.join(STATIC_GENERATED_DIR, item), getCompiledTemplate(item, {
			posts: posts.slice(0, POSTS_PER_PAGE),
			footerYears: footerYears,
			isPost: false,
			currentPage: 1,
			totalPages: totalPages,
			hasNextPage: totalPages > 1,
			hasPrevPage: false,
			nextPageUrl: totalPages > 1 ? '/page-2.html' : null,
			categories: categoriesArray,
			categoryCounts: categoryCounts,
			currentCategory: null
		}), 'utf8');
		
		// Generate paginated pages
		for (let page = 2; page <= totalPages; page++) {
			const startIndex = (page - 1) * POSTS_PER_PAGE;
			const endIndex = page * POSTS_PER_PAGE;
			
			fs.writeFileSync(path.join(STATIC_GENERATED_DIR, `page-${page}.html`), getCompiledTemplate(item, {
				posts: posts.slice(startIndex, endIndex),
				footerYears: footerYears,
				isPost: false,
				currentPage: page,
				totalPages: totalPages,
				hasNextPage: page < totalPages,
				hasPrevPage: page > 1,
				nextPageUrl: page < totalPages ? `/page-${page + 1}.html` : null,
				prevPageUrl: page > 1 ? (page === 2 ? '/' : `/page-${page - 1}.html`) : null,
				categories: categoriesArray,
				categoryCounts: categoryCounts,
				currentCategory: null
			}), 'utf8');
		}
		
		// Generate category pages
		categoriesArray.forEach(function(category) {
			const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
			const categoryPosts = posts.filter(post => post.categories.includes(category));
			const categoryTotalPages = Math.ceil(categoryPosts.length / POSTS_PER_PAGE);
			
			// Generate main category page
			fs.writeFileSync(path.join(STATIC_GENERATED_DIR, `category-${categorySlug}.html`), getCompiledTemplate('index.html', {
				posts: categoryPosts.slice(0, POSTS_PER_PAGE),
				footerYears: footerYears,
				isPost: false,
				currentPage: 1,
				totalPages: categoryTotalPages,
				hasNextPage: categoryTotalPages > 1,
				hasPrevPage: false,
				nextPageUrl: categoryTotalPages > 1 ? `/category-${categorySlug}-page-2.html` : null,
				categories: categoriesArray,
				categoryCounts: categoryCounts,
				currentCategory: category,
				pageTitle: `${category} Posts`
			}), 'utf8');
			
			// Generate paginated category pages
			for (let page = 2; page <= categoryTotalPages; page++) {
				const startIndex = (page - 1) * POSTS_PER_PAGE;
				const endIndex = page * POSTS_PER_PAGE;
				
				fs.writeFileSync(path.join(STATIC_GENERATED_DIR, `category-${categorySlug}-page-${page}.html`), getCompiledTemplate('index.html', {
					posts: categoryPosts.slice(startIndex, endIndex),
					footerYears: footerYears,
					isPost: false,
					currentPage: page,
					totalPages: categoryTotalPages,
					hasNextPage: page < categoryTotalPages,
					hasPrevPage: page > 1,
					nextPageUrl: page < categoryTotalPages ? `/category-${categorySlug}-page-${page + 1}.html` : null,
					prevPageUrl: page > 1 ? (page === 2 ? `/category-${categorySlug}.html` : `/category-${categorySlug}-page-${page - 1}.html`) : null,
					categories: categoriesArray,
					categoryCounts: categoryCounts,
					currentCategory: category,
					pageTitle: `${category} Posts - Page ${page}`
				}), 'utf8');
			}
		});
	}
	else if (item === 'post.html') {
		posts.forEach(function(post) {
			const html = getCompiledTemplate(item, {
				post: post,
				footerYears: footerYears,
				isPost: true
			});

			feedGeneratorInstance.addItem({
				title: post.title,
				id: post.fullUrl,
				link: post.fullUrl,
				description: `${post.title} - Size: ${post.fileSizeString}. ${post.readTime}`,
				content: html.replace(/data-src="/g, 'src="https://blog.fastcomments.com/'), // rss readers don't run javascript or support relative links
				author: [
					{
						name: 'Devon Winrick'
					}
				],
				date: post.dateTimeObj
			});
			fs.writeFileSync(path.join(STATIC_GENERATED_DIR, post.urlIdRaw), html, 'utf8');
		});
		fs.writeFileSync(path.join(STATIC_GENERATED_DIR, 'rss.xml'), feedGeneratorInstance.rss2(), 'utf8');
	}

});

function getCompiledTemplate(templateName, data) {
	return handlebars.compile(fs.readFileSync(path.join(TEMPLATE_DIR, templateName), 'utf8'))(data);
}

function getCompiledPost(html, data) {
	return handlebars.compile(html)(data);
}

console.log(`Execution Time: ${Date.now() - startTime}ms`);
