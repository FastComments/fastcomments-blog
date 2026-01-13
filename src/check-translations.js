#!/usr/bin/env node

/**
 * Script to check for untranslated blog posts.
 * Returns exit code 1 if there are missing translations, 0 if all content is translated.
 *
 * Usage: node src/check-translations.js [--verbose]
 */

const fs = require('fs');
const path = require('path');
const {locales, defaultLocale} = require('./locales');

const CONTENT_DIR = path.join(__dirname, 'content');
const verbose = process.argv.includes('--verbose');

/**
 * Get all markdown files in default locale directory
 * @returns {Array<string>} - Array of filenames
 */
function getDefaultLocaleFiles() {
    const defaultPath = path.join(CONTENT_DIR, defaultLocale);
    if (!fs.existsSync(defaultPath)) {
        console.error(`Error: Default locale directory not found: ${defaultPath}`);
        process.exit(1);
    }

    return fs.readdirSync(defaultPath).filter(file => file.endsWith('.md'));
}

/**
 * Get all markdown files in a locale directory
 * @param {string} locale - Locale code
 * @returns {Array<string>} - Array of filenames
 */
function getLocaleFiles(locale) {
    const localePath = path.join(CONTENT_DIR, locale);
    if (!fs.existsSync(localePath)) return [];

    return fs.readdirSync(localePath).filter(file => file.endsWith('.md'));
}

/**
 * Get source content for translation
 * @param {string} filename - The filename
 * @returns {string} - File content
 */
function getSourceContent(filename) {
    const filePath = path.join(CONTENT_DIR, defaultLocale, filename);
    return fs.readFileSync(filePath, 'utf8');
}

/**
 * Save translated content
 * @param {string} locale - Target locale
 * @param {string} filename - The filename
 * @param {string} content - Translated content
 */
function saveTranslation(locale, filename, content) {
    const localeDir = path.join(CONTENT_DIR, locale);
    if (!fs.existsSync(localeDir)) {
        fs.mkdirSync(localeDir, { recursive: true });
    }
    const filePath = path.join(localeDir, filename);
    fs.writeFileSync(filePath, content, 'utf8');
}

/**
 * Count words in content
 * @param {string} content - File content
 * @returns {number} - Word count
 */
function countWords(content) {
    // Remove markdown code blocks
    let text = content.replace(/```[\s\S]*?```/g, '');
    // Remove inline code
    text = text.replace(/`[^`]+`/g, '');
    // Count words (split on whitespace and filter empty)
    const words = text.split(/\s+/).filter(w => w.length > 0);
    return words.length;
}

/**
 * Estimate LLM tokens for content
 * Uses approximation: ~4 characters per token
 * @param {string} content - File content
 * @returns {Object} - {inputTokens, outputTokens, totalTokens}
 */
function estimateTokens(content) {
    // Rough estimate: 1 token ≈ 4 characters
    const inputTokens = Math.ceil(content.length / 4);
    // Output is similar size (translated content)
    const outputTokens = Math.ceil(content.length / 4);
    return {
        inputTokens,
        outputTokens,
        totalTokens: inputTokens + outputTokens
    };
}

/**
 * Check for missing translations
 * @returns {Object} - Translation status
 */
function checkTranslations() {
    const missingTranslations = {};
    let totalMissing = 0;
    let totalFiles = 0;
    let totalWords = 0;
    let totalInputTokens = 0;
    let totalOutputTokens = 0;

    const defaultFiles = getDefaultLocaleFiles();
    const nonDefaultLocales = Object.keys(locales).filter(l => l !== defaultLocale);

    // Cache source file stats to avoid re-reading
    const sourceFileCache = new Map();

    for (const locale of nonDefaultLocales) {
        const localeFiles = new Set(getLocaleFiles(locale));
        const missing = defaultFiles.filter(file => !localeFiles.has(file));

        if (missing.length > 0) {
            missingTranslations[locale] = missing;
            totalMissing += missing.length;

            // Add word and token counts for missing files
            for (const file of missing) {
                if (!sourceFileCache.has(file)) {
                    const content = getSourceContent(file);
                    sourceFileCache.set(file, {
                        words: countWords(content),
                        tokens: estimateTokens(content)
                    });
                }
                const cached = sourceFileCache.get(file);
                totalWords += cached.words;
                totalInputTokens += cached.tokens.inputTokens;
                totalOutputTokens += cached.tokens.outputTokens;
            }
        }
        totalFiles += defaultFiles.length;
    }

    return {
        missingTranslations,
        totalMissing,
        totalFiles,
        totalWords,
        totalInputTokens,
        totalOutputTokens,
        totalTokens: totalInputTokens + totalOutputTokens
    };
}

/**
 * Get detailed missing translation info for programmatic use
 * @returns {Object} Object with missing translations by locale
 */
function getMissingTranslations() {
    const result = {};
    const defaultFiles = getDefaultLocaleFiles();
    const nonDefaultLocales = Object.keys(locales).filter(l => l !== defaultLocale);

    for (const locale of nonDefaultLocales) {
        const localeFiles = new Set(getLocaleFiles(locale));
        const missing = defaultFiles.filter(file => !localeFiles.has(file));

        if (missing.length > 0) {
            result[locale] = missing;
        }
    }

    return result;
}

function main() {
    console.log('Checking for untranslated blog posts...\n');

    const {
        missingTranslations,
        totalMissing,
        totalFiles,
        totalWords,
        totalInputTokens,
        totalOutputTokens,
        totalTokens
    } = checkTranslations();

    const localesWithMissing = Object.keys(missingTranslations);

    if (localesWithMissing.length > 0) {
        console.log('Missing translations:\n');

        for (const locale of localesWithMissing.sort()) {
            const localeInfo = locales[locale];
            const localeName = localeInfo ? localeInfo.nativeName : locale;
            const files = missingTranslations[locale];

            console.log(`${locale} (${localeName}): ${files.length} file(s)`);
            if (verbose) {
                for (const file of files.sort()) {
                    console.log(`  - ${file}`);
                }
            }
        }
        console.log('');

        const translated = totalFiles - totalMissing;
        const percentage = totalFiles > 0 ? ((translated / totalFiles) * 100).toFixed(1) : 0;

        console.log('---');
        console.log(`Total: ${totalMissing} missing translations across ${localesWithMissing.length} locale(s)`);
        console.log(`Coverage: ${translated}/${totalFiles} files translated (${percentage}%)`);
        console.log('');
        console.log('Estimated translation workload:');
        console.log(`  Words to translate: ${totalWords.toLocaleString()}`);
        console.log(`  LLM tokens (approx): ${totalTokens.toLocaleString()} (${totalInputTokens.toLocaleString()} input + ${totalOutputTokens.toLocaleString()} output)`);
        console.log('');

        process.exit(1);
    }

    console.log('All blog posts are translated.');
    process.exit(0);
}

// Export functions for programmatic use
module.exports = {
    getMissingTranslations,
    getSourceContent,
    saveTranslation,
    checkTranslations,
    getDefaultLocaleFiles,
    getLocaleFiles,
    countWords,
    estimateTokens,
    CONTENT_DIR,
    locales,
    defaultLocale
};

// Run main only if called directly
if (require.main === module) {
    main();
}
