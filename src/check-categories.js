#!/usr/bin/env node

/**
 * Script to validate that translated blog posts use English category names.
 * Categories should always be in English (e.g., [category:Analytics]) - the display
 * translation is handled by the template's translateCategory helper.
 *
 * Returns exit code 1 if invalid categories are found, 0 if all categories are valid.
 *
 * Usage: node src/check-categories.js [--verbose]
 */

const fs = require('fs');
const path = require('path');
const {locales, defaultLocale} = require('./locales');

const CONTENT_DIR = path.join(__dirname, 'content');
const verbose = process.argv.includes('--verbose');

/**
 * Extract categories from a markdown file content
 * @param {string} content - File content
 * @returns {Array<string>} - Array of category names
 */
function extractCategories(content) {
    const categoryRegex = /\[category:([^\]]+)\]/g;
    const categories = [];
    let match;
    while ((match = categoryRegex.exec(content)) !== null) {
        categories.push(match[1]);
    }
    return categories;
}

/**
 * Get all valid categories from the default locale
 * @returns {Set<string>} - Set of valid category names
 */
function getValidCategories() {
    const defaultPath = path.join(CONTENT_DIR, defaultLocale);
    if (!fs.existsSync(defaultPath)) {
        console.error(`Error: Default locale directory not found: ${defaultPath}`);
        process.exit(1);
    }

    const categories = new Set();
    const files = fs.readdirSync(defaultPath).filter(file => file.endsWith('.md'));

    for (const file of files) {
        const content = fs.readFileSync(path.join(defaultPath, file), 'utf8');
        const fileCategories = extractCategories(content);
        fileCategories.forEach(cat => categories.add(cat));
    }

    return categories;
}

/**
 * Check categories in all translated files
 * @param {Set<string>} validCategories - Set of valid English category names
 * @returns {Object} - Object with invalid categories by locale and file
 */
function checkCategories(validCategories) {
    const invalidCategories = {};
    let totalInvalid = 0;

    const nonDefaultLocales = Object.keys(locales).filter(l => l !== defaultLocale);

    for (const locale of nonDefaultLocales) {
        const localePath = path.join(CONTENT_DIR, locale);
        if (!fs.existsSync(localePath)) continue;

        const files = fs.readdirSync(localePath).filter(file => file.endsWith('.md'));

        for (const file of files) {
            const content = fs.readFileSync(path.join(localePath, file), 'utf8');
            const fileCategories = extractCategories(content);

            const invalid = fileCategories.filter(cat => !validCategories.has(cat));

            if (invalid.length > 0) {
                if (!invalidCategories[locale]) {
                    invalidCategories[locale] = {};
                }
                invalidCategories[locale][file] = invalid;
                totalInvalid += invalid.length;
            }
        }
    }

    return { invalidCategories, totalInvalid };
}

function main() {
    console.log('Checking for invalid categories in translated posts...\n');

    const validCategories = getValidCategories();

    if (verbose) {
        console.log('Valid categories (from default locale):');
        for (const cat of [...validCategories].sort()) {
            console.log(`  - ${cat}`);
        }
        console.log('');
    }

    const { invalidCategories, totalInvalid } = checkCategories(validCategories);
    const localesWithInvalid = Object.keys(invalidCategories);

    if (localesWithInvalid.length > 0) {
        console.log('Invalid categories found:\n');
        console.log('Categories in translated posts must use English names.');
        console.log('The translateCategory helper handles display translation.\n');

        for (const locale of localesWithInvalid.sort()) {
            const localeInfo = locales[locale];
            const localeName = localeInfo ? localeInfo.nativeName : locale;
            const files = invalidCategories[locale];
            const fileCount = Object.keys(files).length;

            console.log(`${locale} (${localeName}): ${fileCount} file(s) with invalid categories`);

            for (const [file, categories] of Object.entries(files)) {
                console.log(`  ${file}:`);
                for (const cat of categories) {
                    console.log(`    - [category:${cat}] (should be English)`);
                }
            }
        }
        console.log('');

        console.log('---');
        console.log(`Total: ${totalInvalid} invalid category tag(s) across ${localesWithInvalid.length} locale(s)`);
        console.log('');
        console.log('To fix, replace translated category names with their English equivalents.');
        console.log('Example: [category:Аналітика] -> [category:Analytics]');
        console.log('');

        process.exit(1);
    }

    console.log('All categories are valid.');
    process.exit(0);
}

// Export functions for programmatic use
module.exports = {
    extractCategories,
    getValidCategories,
    checkCategories,
    CONTENT_DIR,
    locales,
    defaultLocale
};

// Run main only if called directly
if (require.main === module) {
    main();
}
