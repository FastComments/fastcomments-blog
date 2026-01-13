const startTime = Date.now();

const fs = require('fs');
const path = require('path');
const marked = require('marked');
const handlebars = require('handlebars');
const feedGenerator = require('feed');
const byteSize = require('byte-size');
const prettyBytes = require('pretty-bytes');
const readingTime = require('reading-time');
const {locales, defaultLocale} = require('./locales');
const translations = require('./translations');

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

handlebars.registerHelper('translateCategory', function(category, t) {
	return (t.categoryNames && t.categoryNames[category]) || category;
});

handlebars.registerHelper('categoryUrl', function(category, locale) {
	const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
	return createCategoryUrl(categorySlug, locale);
});

function getCompiledTemplate(templateName, data) {
	return handlebars.compile(fs.readFileSync(path.join(TEMPLATE_DIR, templateName), 'utf8'))(data);
}

function getCompiledPost(html, data) {
	return handlebars.compile(html)(data);
}

// Helper function to create post URL with locale
function createPostUrl(urlIdRaw, locale) {
	if (locale && locale !== defaultLocale) {
		// Insert locale before .html extension
		return urlIdRaw.replace('.html', `-${locale}.html`);
	}
	return urlIdRaw;
}

// Helper function to process a single post file
function processPost(item, locale, contentDir) {
	const title = item.replace('\.md', '');
	const urlIdRaw = title.toLowerCase().replace(/ /g, '-') + '.html';
	const urlIdRawWithLocale = createPostUrl(urlIdRaw, locale);
	const urlId = encodeURIComponent(urlIdRawWithLocale);
	const fullUrl = 'https://blog.fastcomments.com/' + urlIdRawWithLocale;
	const fullUrlRaw = 'https://blog.fastcomments.com/' + urlIdRawWithLocale;
	const commentCountHTML = `<div class="post-comment-count fast-comments-count" data-fast-comments-url-id="${fullUrlRaw}">...</div>`;

	let fileContent = fs.readFileSync(path.join(contentDir, item), 'utf8');

	// Extract categories from the file content (look for [category:name] tags)
	const categoryRegex = /\[category:([^\]]+)\]/g;
	const categories = [];
	let categoryMatch;
	while ((categoryMatch = categoryRegex.exec(fileContent)) !== null) {
		const category = categoryMatch[1].trim();
		categories.push(category);
	}

	// Remove category tags from content
	fileContent = fileContent.replace(categoryRegex, '');

	fileContent = fileContent.replace('[postlink]', `<a href="${urlIdRawWithLocale}">`);
	fileContent = fileContent.replace('[/postlink]', `</a>`);
	let html = marked.parse(fileContent);
	const postByteSize = byteSize(html.length).toString();

	const imageSrcs = html.match(/src\s*=\s*"?(.+?)["|\s]/g);
	let mediaSize = 0;
	if(imageSrcs) {
		for(const imageSrc of imageSrcs) {
			const localPath = imageSrc.substring(5, imageSrc.length - 1);
			if (!localPath.startsWith('http')) {
				try {
					mediaSize += fs.statSync(path.join(STATIC_DIR, localPath)).size;
				} catch(e) {
					// File might not exist, skip
				}
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

	return {
		html: html,
		previewHTML: previewHTML,
		title: title,
		urlId: urlId,
		urlIdRaw: urlIdRawWithLocale,
		fullUrl: fullUrl,
		fullUrlRaw: fullUrlRaw,
		dateTimeObj: ctime,
		dateTime: ctime.getTime(),
		minSize: postByteSize,
		mediaSize: mediaSize,
		fileSizeString: fileSizeString,
		hasMedia: !!imageSrcs,
		readTime: readTime,
		categories: categories,
		locale: locale
	};
}

// Build posts for each locale
var postsByLocale = {};
var allCategories = new Set();
var categoryCounts = {};

// Process each locale
for (const locale of Object.keys(locales)) {
	postsByLocale[locale] = [];

	// Check if locale directory exists
	const localeContentDir = path.join(CONTENT_DIR, locale);
	let contentDirToUse = localeContentDir;
	let isFallback = false;

	if (!fs.existsSync(localeContentDir)) {
		// Fall back to default locale
		if (locale !== defaultLocale) {
			const defaultLocaleDir = path.join(CONTENT_DIR, defaultLocale);
			if (fs.existsSync(defaultLocaleDir)) {
				contentDirToUse = defaultLocaleDir;
				isFallback = true;
			} else {
				// Fall back to root content directory (backwards compatibility)
				contentDirToUse = CONTENT_DIR;
				isFallback = true;
			}
		} else {
			// For default locale, try root content directory
			if (fs.existsSync(CONTENT_DIR)) {
				const rootFiles = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'));
				if (rootFiles.length > 0) {
					contentDirToUse = CONTENT_DIR;
				}
			}
		}
	}

	// Only process if the directory exists and has .md files
	if (fs.existsSync(contentDirToUse)) {
		const items = fs.readdirSync(contentDirToUse).filter(item => item.endsWith('.md'));

		items.forEach(function(item) {
			const post = processPost(item, locale, contentDirToUse);
			post.isFallback = isFallback;
			postsByLocale[locale].push(post);

			// Collect categories (only from default locale to avoid duplicates)
			if (locale === defaultLocale) {
				post.categories.forEach(cat => {
					allCategories.add(cat);
					categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
				});
			}
		});

		// Sort posts by date
		postsByLocale[locale].sort(function(a, b) {
			if(a.dateTime === b.dateTime) {
				return 0;
			}
			return a.dateTime > b.dateTime ? -1 : 1;
		});
	}
}

// Use default locale posts as the main posts array for RSS feed
var posts = postsByLocale[defaultLocale] || [];

// Helper function to create index URL with locale
function createIndexUrl(locale, page = 1) {
	const baseUrl = page === 1 ? 'index.html' : `page-${page}.html`;
	if (locale && locale !== defaultLocale) {
		return baseUrl.replace('.html', `-${locale}.html`);
	}
	return baseUrl;
}

// Helper function to create category URL with locale
function createCategoryUrl(categorySlug, locale, page = 1) {
	const baseUrl = page === 1 ? `category-${categorySlug}.html` : `category-${categorySlug}-page-${page}.html`;
	if (locale && locale !== defaultLocale) {
		return baseUrl.replace('.html', `-${locale}.html`);
	}
	return baseUrl;
}

// Helper function to build alternate locale links
function buildAlternateLocales(baseUrl, locale) {
	return Object.keys(locales).map(loc => {
		let targetUrl;
		if (locale === defaultLocale) {
			// Current URL has no locale suffix, add one for non-default locales
			targetUrl = loc === defaultLocale ? baseUrl : baseUrl.replace('.html', `-${loc}.html`);
		} else {
			// Current URL has a locale suffix, replace or remove it
			targetUrl = loc === defaultLocale
				? baseUrl.replace(new RegExp(`-${locale}\\.html$`), '.html')
				: baseUrl.replace(new RegExp(`-${locale}\\.html$`), `-${loc}.html`);
		}
		return {
			hreflang: locales[loc].hreflang,
			url: targetUrl,
			current: loc === locale
		};
	});
}

// Helper function to build available locales for language selector
function buildAvailableLocales(baseUrl, locale) {
	return Object.keys(locales).map(loc => {
		let targetUrl;
		if (locale === defaultLocale) {
			// Current URL has no locale suffix, add one for non-default locales
			targetUrl = loc === defaultLocale ? baseUrl : baseUrl.replace('.html', `-${loc}.html`);
		} else {
			// Current URL has a locale suffix, replace or remove it
			targetUrl = loc === defaultLocale
				? baseUrl.replace(new RegExp(`-${locale}\\.html$`), '.html')
				: baseUrl.replace(new RegExp(`-${locale}\\.html$`), `-${loc}.html`);
		}
		return {
			code: loc,
			name: locales[loc].name,
			nativeName: locales[loc].nativeName,
			flag: locales[loc].flag || '🌐',
			url: targetUrl,
			current: loc === locale
		};
	});
}

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

// Generate pages for each locale
for (const locale of Object.keys(locales)) {
	const localePosts = postsByLocale[locale] || [];
	if (localePosts.length === 0) continue;

	const totalPages = Math.ceil(localePosts.length / POSTS_PER_PAGE);

	// Build locale metadata for templates
	const localeData = {
		locale: locale,
		lang: locales[locale].hreflang,
		alternateLocales: buildAlternateLocales(createIndexUrl(locale), locale),
		availableLocales: buildAvailableLocales(createIndexUrl(locale), locale),
		t: translations[locale] || translations[defaultLocale]
	};

	// Generate main index page
	const indexUrl = createIndexUrl(locale);
	fs.writeFileSync(path.join(STATIC_GENERATED_DIR, indexUrl), getCompiledTemplate('index.html', {
		posts: localePosts.slice(0, POSTS_PER_PAGE),
		footerYears: footerYears,
		isPost: false,
		currentPage: 1,
		totalPages: totalPages,
		hasNextPage: totalPages > 1,
		hasPrevPage: false,
		nextPageUrl: totalPages > 1 ? '/' + createIndexUrl(locale, 2) : null,
		categories: categoriesArray,
		categoryCounts: categoryCounts,
		currentCategory: null,
		...localeData
	}), 'utf8');

	// Generate paginated pages
	for (let page = 2; page <= totalPages; page++) {
		const startIndex = (page - 1) * POSTS_PER_PAGE;
		const endIndex = page * POSTS_PER_PAGE;
		const pageUrl = createIndexUrl(locale, page);

		fs.writeFileSync(path.join(STATIC_GENERATED_DIR, pageUrl), getCompiledTemplate('index.html', {
			posts: localePosts.slice(startIndex, endIndex),
			footerYears: footerYears,
			isPost: false,
			currentPage: page,
			totalPages: totalPages,
			hasNextPage: page < totalPages,
			hasPrevPage: page > 1,
			nextPageUrl: page < totalPages ? '/' + createIndexUrl(locale, page + 1) : null,
			prevPageUrl: page > 1 ? (page === 2 ? '/' + createIndexUrl(locale) : '/' + createIndexUrl(locale, page - 1)) : null,
			categories: categoriesArray,
			categoryCounts: categoryCounts,
			currentCategory: null,
			...localeData
		}), 'utf8');
	}

	// Generate category pages
	categoriesArray.forEach(function(category) {
		const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
		const categoryPosts = localePosts.filter(post => post.categories.includes(category));
		const categoryTotalPages = Math.ceil(categoryPosts.length / POSTS_PER_PAGE);

		if (categoryPosts.length === 0) return;

		const categoryUrl = createCategoryUrl(categorySlug, locale);
		const translatedCategory = (localeData.t.categoryNames && localeData.t.categoryNames[category]) || category;

		// Generate main category page
		fs.writeFileSync(path.join(STATIC_GENERATED_DIR, categoryUrl), getCompiledTemplate('index.html', {
			posts: categoryPosts.slice(0, POSTS_PER_PAGE),
			footerYears: footerYears,
			isPost: false,
			currentPage: 1,
			totalPages: categoryTotalPages,
			hasNextPage: categoryTotalPages > 1,
			hasPrevPage: false,
			nextPageUrl: categoryTotalPages > 1 ? '/' + createCategoryUrl(categorySlug, locale, 2) : null,
			categories: categoriesArray,
			categoryCounts: categoryCounts,
			currentCategory: category,
			pageTitle: `${translatedCategory} ${localeData.t.posts}`,
			...localeData
		}), 'utf8');

		// Generate paginated category pages
		for (let page = 2; page <= categoryTotalPages; page++) {
			const startIndex = (page - 1) * POSTS_PER_PAGE;
			const endIndex = page * POSTS_PER_PAGE;
			const pageUrl = createCategoryUrl(categorySlug, locale, page);

			fs.writeFileSync(path.join(STATIC_GENERATED_DIR, pageUrl), getCompiledTemplate('index.html', {
				posts: categoryPosts.slice(startIndex, endIndex),
				footerYears: footerYears,
				isPost: false,
				currentPage: page,
				totalPages: categoryTotalPages,
				hasNextPage: page < categoryTotalPages,
				hasPrevPage: page > 1,
				nextPageUrl: page < categoryTotalPages ? '/' + createCategoryUrl(categorySlug, locale, page + 1) : null,
				prevPageUrl: page > 1 ? (page === 2 ? '/' + createCategoryUrl(categorySlug, locale) : '/' + createCategoryUrl(categorySlug, locale, page - 1)) : null,
				categories: categoriesArray,
				categoryCounts: categoryCounts,
				currentCategory: category,
				pageTitle: `${translatedCategory} ${localeData.t.posts} - ${localeData.t.page} ${page}`,
				...localeData
			}), 'utf8');
		}
	});

	// Generate post pages
	localePosts.forEach(function(post) {
		const postLocaleData = {
			locale: locale,
			lang: locales[locale].hreflang,
			alternateLocales: buildAlternateLocales(post.urlIdRaw, locale),
			availableLocales: buildAvailableLocales(post.urlIdRaw, locale),
			t: translations[locale] || translations[defaultLocale]
		};

		const html = getCompiledTemplate('post.html', {
			post: post,
			footerYears: footerYears,
			isPost: true,
			...postLocaleData
		});

		// Only add to RSS feed from default locale
		if (locale === defaultLocale) {
			feedGeneratorInstance.addItem({
				title: post.title,
				id: post.fullUrl,
				link: post.fullUrl,
				description: `${post.title} - Size: ${post.fileSizeString}. ${post.readTime}`,
				content: html.replace(/data-src="/g, 'src="https://blog.fastcomments.com/'),
				author: [
					{
						name: 'Devon Winrick'
					}
				],
				date: post.dateTimeObj
			});
		}

		fs.writeFileSync(path.join(STATIC_GENERATED_DIR, post.urlIdRaw), html, 'utf8');
	});
}

// Write RSS feed (only for default locale)
fs.writeFileSync(path.join(STATIC_GENERATED_DIR, 'rss.xml'), feedGeneratorInstance.rss2(), 'utf8');

console.log(`Execution Time: ${Date.now() - startTime}ms`);
