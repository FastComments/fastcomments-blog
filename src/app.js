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

const BASE_URL = 'https://blog.fastcomments.com';
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
	const categorySlug = slugifyCategory(category);
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

// Approximate SERP-rendered width (px) of description text at 13px Arial: ASCII
// glyphs average ~0.5em, non-ASCII (CJK/Cyrillic/etc.) ~1em; 1em = 13px. The
// crawler flags descriptions under ~320px (too short) or over ~985px (too long).
function serpDescPx(text) {
	let px = 0;
	for (let i = 0; i < text.length; i++) px += text.charCodeAt(i) <= 126 ? 6.5 : 13;
	return px;
}

function decodeEntities(text) {
	return text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}

// Category URL slug. Replace '&' with 'and' so category URLs never contain a raw
// '&' (which breaks URL parsing / crawlers), then spaces to hyphens.
function slugifyCategory(category) {
	return category.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-');
}

// Trim text under maxPx on a word boundary, adding an ellipsis when trimmed.
function clampDescPx(text, maxPx) {
	if (serpDescPx(text) <= maxPx) return text;
	let out = '';
	for (const w of text.split(' ')) {
		const cand = out ? out + ' ' + w : w;
		if (serpDescPx(cand + '…') > maxPx) break;
		out = cand;
	}
	return (out || text.slice(0, 60)) + '…';
}

// Build a listing/category description from its heading plus the titles of the
// posts shown, so it is unique per page, localized, and wide enough for SERP.
function listingDescription(heading, postsShown) {
	let d = heading;
	const titles = (postsShown || []).map(p => p.titleText).filter(Boolean);
	if (titles.length) {
		const parts = [];
		for (const t of titles) {
			parts.push(t);
			if (serpDescPx(heading + ': ' + parts.join(', ')) >= 360) break;
		}
		d = heading + ': ' + parts.join(', ');
	}
	return clampDescPx(d, 950);
}

// Helper function to process a single post file
function processPost(item, locale, contentDir) {
	const title = item.replace('\.md', '');
	const rawSlug = title.toLowerCase().replace(/ /g, '-') + '.html';
	// The URL/filename slug must not contain '&' (a raw '&' in a path breaks URL
	// parsing and trips crawlers). Sanitize it for the URL, but keep the original
	// slug as the stable comment id so existing comments are never orphaned.
	const urlIdRaw = rawSlug.replace(/&/g, 'and');
	const urlIdRawWithLocale = createPostUrl(urlIdRaw, locale);
	const urlId = encodeURIComponent(urlIdRawWithLocale);
	const fullUrl = BASE_URL + '/' + urlIdRawWithLocale;
	const fullUrlRaw = BASE_URL + '/' + urlIdRawWithLocale;
	// Use stable urlId without locale for comments (shared across all languages)
	const stableUrlId = rawSlug;
	const commentCountHTML = `<div class="post-comment-count fast-comments-count" data-fast-comments-url-id="${stableUrlId}">...</div>`;

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

	// On listing pages each card renders a post preview; demote the preview's
	// title <h1> to <h2> so a listing page has one <h1> (its section heading).
	const previewHTML = getCompiledPost(html, {
		isPost: false
	}).replace(/<h1\b/gi, '<h2').replace(/<\/h1>/gi, '</h2>');

	html = getCompiledPost(html, {
		isPost: true
	});

	let titleHtml = '';
	let bodyHtml = html;
	const h1EndIndex = html.indexOf('</h1>');
	if (h1EndIndex !== -1) {
		const splitIndex = h1EndIndex + 5;
		titleHtml = html.substring(0, splitIndex);
		bodyHtml = html.substring(splitIndex);
	}

	// Derive the plain-text title from the (translated) <h1> so the HTML <title>
	// element is localized too. Fall back to the filename-derived title if there's no h1.
	const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
	const titleText = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : title;

	// Meta description: accumulate body paragraphs until wide enough for SERP (~360px),
	// then clamp under ~950px. Falls back to the title for a near-empty body.
	let description = '';
	const paragraphs = (bodyHtml.match(/<p[^>]*>[\s\S]*?<\/p>/gi) || [])
		.map(p => p.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim())
		.filter(Boolean);
	for (const t of paragraphs) {
		description = description ? description + ' ' + t : t;
		if (serpDescPx(description) >= 360) break;
	}
	if (!description) description = titleText;
	description = clampDescPx(decodeEntities(description), 950);

	return {
		html: html,
		titleHtml: titleHtml,
		bodyHtml: bodyHtml,
		previewHTML: previewHTML,
		title: title,
		titleText: titleText,
		description: description,
		urlId: urlId,
		urlIdRaw: urlIdRawWithLocale,
		fullUrl: fullUrl,
		fullUrlRaw: fullUrlRaw,
		stableUrlId: stableUrlId,
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
	const defaultUrl = locale === defaultLocale
		? baseUrl
		: baseUrl.replace(new RegExp(`-${locale}\\.html$`), '.html');
	const result = Object.keys(locales).map(loc => {
		let targetUrl;
		if (locale === defaultLocale) {
			// Current URL has no locale suffix, add one for non-default locales
			targetUrl = loc === defaultLocale ? baseUrl : baseUrl.replace('.html', `-${loc}.html`);
		} else {
			// Current URL has a locale suffix, replace or remove it
			targetUrl = loc === defaultLocale
				? defaultUrl
				: baseUrl.replace(new RegExp(`-${locale}\\.html$`), `-${loc}.html`);
		}
		return {
			hreflang: locales[loc].hreflang,
			url: targetUrl,
			current: loc === locale
		};
	}).filter(entry => generatedUrls.has(entry.url));
	// Add x-default pointing to the default locale version (only if it exists)
	if (generatedUrls.has(defaultUrl)) {
		result.push({
			hreflang: 'x-default',
			url: defaultUrl,
			current: false
		});
	}
	// Keep index.html as-is so hreflang self-ref matches the actual page URL
	return result;
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
	}).filter(entry => generatedUrls.has(entry.url));
}

const feedGeneratorInstance = new feedGenerator.Feed({
	title: 'FastComments Blog',
	description: 'All things FastComments.com',
	id: BASE_URL,
	link: BASE_URL,
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

// Sitemap helpers
function escapeXml(str) {
	return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function buildSitemapAlternates(baseFileName) {
	const alternates = [];
	for (const loc of Object.keys(locales)) {
		let targetFile;
		if (loc === defaultLocale) {
			targetFile = baseFileName;
		} else {
			targetFile = baseFileName.replace('.html', `-${loc}.html`);
		}
		if (generatedUrls.has(targetFile)) {
			alternates.push({ hreflang: locales[loc].hreflang, url: BASE_URL + '/' + targetFile });
		}
	}
	// x-default points to the default locale version (only if it exists)
	if (generatedUrls.has(baseFileName)) {
		alternates.push({ hreflang: 'x-default', url: BASE_URL + '/' + baseFileName });
	}
	return alternates;
}

// Precompute every page URL that will actually be generated, so hreflang, the
// language selector, and sitemap alternates never point at a locale variant that
// does not exist (e.g. a post not yet translated into every locale).
const generatedUrls = new Set();
for (const gLocale of Object.keys(locales)) {
	const gPosts = postsByLocale[gLocale] || [];
	if (gPosts.length === 0) continue;
	const gTotalPages = Math.ceil(gPosts.length / POSTS_PER_PAGE);
	generatedUrls.add(createIndexUrl(gLocale));
	for (let page = 2; page <= gTotalPages; page++) {
		generatedUrls.add(createIndexUrl(gLocale, page));
	}
	categoriesArray.forEach(function (category) {
		const categorySlug = slugifyCategory(category);
		const categoryPosts = gPosts.filter(post => post.categories.includes(category));
		if (categoryPosts.length === 0) return;
		const categoryTotalPages = Math.ceil(categoryPosts.length / POSTS_PER_PAGE);
		generatedUrls.add(createCategoryUrl(categorySlug, gLocale));
		for (let page = 2; page <= categoryTotalPages; page++) {
			generatedUrls.add(createCategoryUrl(categorySlug, gLocale, page));
		}
	});
	gPosts.forEach(function (post) {
		generatedUrls.add(post.urlIdRaw);
	});
}

const sitemapEntries = [];

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
		pageTitle: localeData.t.recentPosts,
		pageDescription: listingDescription(localeData.t.recentPosts, localePosts.slice(0, POSTS_PER_PAGE)),
		canonicalUrl: BASE_URL + '/' + createIndexUrl(locale),
		...localeData
	}), 'utf8');

	sitemapEntries.push({
		loc: BASE_URL + '/' + indexUrl,
		changefreq: 'daily',
		priority: '1.0',
		alternates: buildSitemapAlternates(createIndexUrl(defaultLocale))
	});

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
			pageTitle: `${localeData.t.recentPosts} - ${localeData.t.page} ${page}`,
			pageDescription: listingDescription(`${localeData.t.recentPosts} - ${localeData.t.page} ${page}`, localePosts.slice(startIndex, endIndex)),
			canonicalUrl: BASE_URL + '/' + createIndexUrl(locale, page),
			...localeData,
			alternateLocales: buildAlternateLocales(pageUrl, locale),
			availableLocales: buildAvailableLocales(pageUrl, locale)
		}), 'utf8');

		sitemapEntries.push({
			loc: BASE_URL + '/' + pageUrl,
			changefreq: 'daily',
			priority: '0.8',
			alternates: buildSitemapAlternates(createIndexUrl(defaultLocale, page))
		});
	}

	// Generate category pages
	categoriesArray.forEach(function(category) {
		const categorySlug = slugifyCategory(category);
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
			pageDescription: listingDescription(`${translatedCategory} ${localeData.t.posts}`, categoryPosts.slice(0, POSTS_PER_PAGE)),
			canonicalUrl: BASE_URL + '/' + createCategoryUrl(categorySlug, locale),
			...localeData,
			alternateLocales: buildAlternateLocales(categoryUrl, locale),
			availableLocales: buildAvailableLocales(categoryUrl, locale)
		}), 'utf8');

		sitemapEntries.push({
			loc: BASE_URL + '/' + categoryUrl,
			changefreq: 'weekly',
			priority: '0.6',
			alternates: buildSitemapAlternates(createCategoryUrl(categorySlug, defaultLocale))
		});

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
				pageDescription: listingDescription(`${translatedCategory} ${localeData.t.posts} - ${localeData.t.page} ${page}`, categoryPosts.slice(startIndex, endIndex)),
				canonicalUrl: BASE_URL + '/' + createCategoryUrl(categorySlug, locale, page),
				...localeData,
				alternateLocales: buildAlternateLocales(pageUrl, locale),
				availableLocales: buildAvailableLocales(pageUrl, locale)
			}), 'utf8');

			sitemapEntries.push({
				loc: BASE_URL + '/' + pageUrl,
				changefreq: 'weekly',
				priority: '0.5',
				alternates: buildSitemapAlternates(createCategoryUrl(categorySlug, defaultLocale, page))
			});
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

		const canonicalUrl = BASE_URL + '/' + post.urlIdRaw;
		const html = getCompiledTemplate('post.html', {
			post: post,
			footerYears: footerYears,
			isPost: true,
			canonicalUrl,
			...postLocaleData
		});

		// Only add to RSS feed from default locale
		if (locale === defaultLocale) {
			feedGeneratorInstance.addItem({
				title: post.title,
				id: post.fullUrl,
				link: post.fullUrl,
				description: `${post.title} - Size: ${post.fileSizeString}. ${post.readTime}`,
				content: html.replace(/data-src="/g, `src="${BASE_URL}/`),
				author: [
					{
						name: 'Devon Winrick'
					}
				],
				date: post.dateTimeObj
			});
		}

		fs.writeFileSync(path.join(STATIC_GENERATED_DIR, post.urlIdRaw), html, 'utf8');

		const lastmod = post.dateTimeObj.toISOString().split('T')[0];
		sitemapEntries.push({
			loc: BASE_URL + '/' + post.urlIdRaw,
			lastmod: lastmod,
			changefreq: 'monthly',
			priority: '0.8',
			alternates: buildSitemapAlternates(post.stableUrlId)
		});
	});
}

// Write sitemap
let sitemapXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemapXml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
for (const entry of sitemapEntries) {
	sitemapXml += '  <url>\n';
	sitemapXml += `    <loc>${escapeXml(entry.loc)}</loc>\n`;
	if (entry.lastmod) {
		sitemapXml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
	}
	sitemapXml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
	sitemapXml += `    <priority>${entry.priority}</priority>\n`;
	for (const alt of entry.alternates) {
		sitemapXml += `    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.url)}"/>\n`;
	}
	sitemapXml += '  </url>\n';
}
sitemapXml += '</urlset>\n';
const sitemapUrlCount = sitemapEntries.length;
const sitemapBytes = Buffer.byteLength(sitemapXml, 'utf8');
const MAX_SITEMAP_URLS = 50000;
const MAX_SITEMAP_BYTES = 50 * 1024 * 1024; // 50MB
if (sitemapUrlCount > MAX_SITEMAP_URLS) {
	throw new Error(`Sitemap exceeds max URL count: ${sitemapUrlCount} > ${MAX_SITEMAP_URLS}`);
}
if (sitemapBytes > MAX_SITEMAP_BYTES) {
	throw new Error(`Sitemap exceeds max file size: ${(sitemapBytes / 1024 / 1024).toFixed(1)}MB > 50MB`);
}
fs.writeFileSync(path.join(STATIC_GENERATED_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`Sitemap: ${sitemapUrlCount} URLs (${(sitemapBytes / 1024 / 1024).toFixed(1)}MB)`);

// Write robots.txt pointing at the sitemap (served from the generated root).
fs.writeFileSync(path.join(STATIC_GENERATED_DIR, 'robots.txt'),
	`User-agent: *\nAllow: /\nSitemap: ${BASE_URL}/sitemap.xml\n`, 'utf8');

// Remove stale generated HTML (e.g. pages from removed locales) so a deploy never
// serves orphans. Keep everything we just generated plus the copied static pages.
const keepHtml = new Set([...generatedUrls, ...fs.readdirSync(STATIC_DIR).filter(f => f.endsWith('.html'))]);
let removedStale = 0;
for (const f of fs.readdirSync(STATIC_GENERATED_DIR)) {
	if (f.endsWith('.html') && !keepHtml.has(f)) {
		fs.unlinkSync(path.join(STATIC_GENERATED_DIR, f));
		removedStale++;
	}
}
if (removedStale > 0) console.log(`Removed ${removedStale} stale generated HTML file(s).`);

// Write RSS feed (only for default locale)
fs.writeFileSync(path.join(STATIC_GENERATED_DIR, 'rss.xml'), feedGeneratorInstance.rss2(), 'utf8');

console.log(`Execution Time: ${Date.now() - startTime}ms`);
