#!/usr/bin/env node

/**
 * Script to check for untranslated blog posts, and translations left outdated by an edit to the source post.
 * Returns exit code 1 if any translation is missing or outdated, 0 if all content is translated and current.
 *
 * Usage: node src/check-translations.js [--verbose]
 */

const fs = require('fs');
const path = require('path');
const {locales, defaultLocale} = require('./locales');
const {hashContent, loadCache, getCacheKey} = require('./translation-snapshot');

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
 * Get translations that are missing, or outdated because the source post was edited after translating.
 * Outdated means the cached source hash differs from the current source, the same rule
 * translate-with-gpt.js uses to pick its work, so the build gate and the translator always agree.
 * @returns {Object} - { locale: { missing: [filenames], outdated: [filenames] } } for locales needing work
 */
function getTranslationsNeedingWork() {
    const result = {};
    const cache = loadCache();
    const defaultFiles = getDefaultLocaleFiles();
    const sourceHashes = new Map(defaultFiles.map(file => [file, hashContent(getSourceContent(file))]));
    const nonDefaultLocales = Object.keys(locales).filter(l => l !== defaultLocale);

    for (const locale of nonDefaultLocales) {
        const localeFiles = new Set(getLocaleFiles(locale));
        const missing = [];
        const outdated = [];
        for (const file of defaultFiles) {
            if (!localeFiles.has(file)) {
                missing.push(file);
            } else if (cache[getCacheKey(locale, file)] !== sourceHashes.get(file)) {
                outdated.push(file);
            }
        }
        if (missing.length > 0 || outdated.length > 0) {
            result[locale] = { missing, outdated };
        }
    }

    return result;
}

/**
 * Check for missing and outdated translations
 * @returns {Object} - Translation status
 */
function checkTranslations() {
    const needingWork = getTranslationsNeedingWork();
    let totalMissing = 0;
    let totalOutdated = 0;
    let totalWords = 0;
    let totalInputTokens = 0;
    let totalOutputTokens = 0;

    const nonDefaultLocales = Object.keys(locales).filter(l => l !== defaultLocale);
    const totalFiles = getDefaultLocaleFiles().length * nonDefaultLocales.length;

    // Cache source file stats to avoid re-reading
    const sourceFileCache = new Map();

    for (const { missing, outdated } of Object.values(needingWork)) {
        totalMissing += missing.length;
        totalOutdated += outdated.length;

        for (const file of [...missing, ...outdated]) {
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

    return {
        needingWork,
        totalMissing,
        totalOutdated,
        totalFiles,
        totalWords,
        totalInputTokens,
        totalOutputTokens,
        totalTokens: totalInputTokens + totalOutputTokens
    };
}

function main() {
    console.log('Checking for missing or outdated blog post translations...\n');

    const {
        needingWork,
        totalMissing,
        totalOutdated,
        totalFiles,
        totalWords,
        totalInputTokens,
        totalOutputTokens,
        totalTokens
    } = checkTranslations();

    const localesNeedingWork = Object.keys(needingWork);

    if (localesNeedingWork.length > 0) {
        console.log('Translations needing work:\n');

        for (const locale of localesNeedingWork.sort()) {
            const localeInfo = locales[locale];
            const localeName = localeInfo ? localeInfo.nativeName : locale;
            const { missing, outdated } = needingWork[locale];

            console.log(`${locale} (${localeName}): ${missing.length} missing, ${outdated.length} outdated`);
            if (verbose) {
                for (const file of [...missing].sort()) {
                    console.log(`  - [missing] ${file}`);
                }
                for (const file of [...outdated].sort()) {
                    console.log(`  - [outdated] ${file}`);
                }
            }
        }
        console.log('');

        const translated = totalFiles - totalMissing - totalOutdated;
        const percentage = totalFiles > 0 ? ((translated / totalFiles) * 100).toFixed(1) : 0;

        console.log('---');
        console.log(`Total: ${totalMissing} missing and ${totalOutdated} outdated translations across ${localesNeedingWork.length} locale(s)`);
        console.log(`Coverage: ${translated}/${totalFiles} files up to date (${percentage}%)`);
        console.log('');
        console.log('Estimated translation workload:');
        console.log(`  Words to translate: ${totalWords.toLocaleString()}`);
        console.log(`  LLM tokens (approx): ${totalTokens.toLocaleString()} (${totalInputTokens.toLocaleString()} input + ${totalOutputTokens.toLocaleString()} output)`);
        console.log('');

        process.exit(1);
    }

    console.log('All blog post translations are up to date.');
    process.exit(0);
}

// Export functions for programmatic use
module.exports = {
    getTranslationsNeedingWork,
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
