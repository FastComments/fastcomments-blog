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

var posts = [];
fs.readdirSync(CONTENT_DIR).forEach(function(item) {
	const title = item.replace('\.md', '');
	const urlId = title.toLowerCase().replace(/ /g, '-') + '.html';
	const fullUrl = 'https://blog.fastcomments.com/' + urlId;

	let fileContent = fs.readFileSync(path.join(CONTENT_DIR, item), 'utf8');
	fileContent = fileContent.replace('[postlink]', `<a href="${fullUrl}" class="post-link-icon">&#128279;</a>`);
	let html = marked(fileContent);
	const postByteSize = byteSize(html.length).toString();

	const imageSrcs = html.match(/data-src\s*=\s*"?(.+?)["|\s]/g);
	let mediaSize = 0;
	if(imageSrcs) {
		for(const imageSrc of imageSrcs) {
			mediaSize += fs.statSync(path.join(STATIC_DIR, imageSrc.substring(10, imageSrc.length - 1))).size; // Would be nice to fix regex to not include src=""
		}
	}
	mediaSize = prettyBytes(mediaSize);
	const fileSizeString = imageSrcs ? `${postByteSize} - ${mediaSize}` : postByteSize;
	html = html.replace('[filesize]', fileSizeString);
	const readTime = readingTime(html).text;
	html = html.replace('[readtime]', readTime);

	const dateString = title.substring(1, title.indexOf(')'));
	const ctime = new Date(dateString);

	html = html.replace('[postdate]', ctime.toDateString());

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
		fullUrl: fullUrl,
		dateTimeObj: ctime,
		dateTime: ctime.getTime(),
		minSize: postByteSize,
		mediaSize: mediaSize,
		fileSizeString: fileSizeString,
		hasMedia: !!imageSrcs,
		readTime: readTime
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

fs.readdirSync(TEMPLATE_DIR).forEach(function(item) {
	if(item === 'index.html') {
		fs.writeFileSync(path.join(STATIC_GENERATED_DIR, item), getCompiledTemplate(item, {
			posts: posts,
			footerYears: footerYears,
			isPost: false
		}), 'utf8');
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
			fs.writeFileSync(path.join(STATIC_GENERATED_DIR, post.urlId), html, 'utf8');
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
