#!/usr/bin/env node

/**
 * Script to translate missing blog posts using OpenAI GPT API.
 * Uses check-translations.js to identify missing translations.
 * Uses snapshot mechanism to detect when source files have changed.
 *
 * Usage: node src/translate-with-gpt.js [--locale <locale>] [--concurrency <n>] [--dry-run] [--force]
 *
 * Environment variables:
 *   OPENAI_API_KEY - Required. Your OpenAI API key.
 *   OPENAI_MODEL - Optional. Model to use (default: gpt-4o-mini).
 */

const fs = require('fs');
const path = require('path');

const {
    getMissingTranslations,
    getSourceContent,
    saveTranslation,
    getDefaultLocaleFiles,
    locales,
    defaultLocale
} = require('./check-translations');

const { hashContent } = require('./translation-snapshot');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';
const CACHE_FILE = path.join(__dirname, 'translation-cache.json');

/**
 * Load translation cache from disk
 * @returns {Object} - Cache object { "locale/filename": "md5hash", ... }
 */
function loadCache() {
    if (!fs.existsSync(CACHE_FILE)) {
        return {};
    }
    try {
        return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    } catch (e) {
        console.warn(`Failed to load cache: ${e.message}`);
        return {};
    }
}

/**
 * Save translation cache to disk
 * @param {Object} cache - Cache object
 */
function saveCache(cache) {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf8');
}

/**
 * Generate cache key
 * @param {string} locale - Target locale
 * @param {string} filename - Filename
 * @returns {string} - Cache key
 */
function getCacheKey(locale, filename) {
    return `${locale}/${filename}`;
}

/**
 * Check if translation is cached with matching source hash
 * @param {Object} cache - Cache object
 * @param {string} key - Cache key
 * @param {string} sourceHash - MD5 hash of source content
 * @returns {boolean} - True if cached and hash matches
 */
function isCached(cache, key, sourceHash) {
    return cache[key] === sourceHash;
}

/**
 * Update cache entry
 * @param {Object} cache - Cache object
 * @param {string} key - Cache key
 * @param {string} sourceHash - MD5 hash of source content
 */
function updateCache(cache, key, sourceHash) {
    cache[key] = sourceHash;
}

/**
 * Translation client using OpenAI API
 */
class TranslationClient {
    constructor() {
        this.apiKey = OPENAI_API_KEY;
        this.model = OPENAI_MODEL;
    }

    /**
     * Build system message for translation
     * @param {string} locale - Target locale
     * @returns {string} - System message
     */
    getSystemMessage(locale) {
        const localeInfo = locales[locale];
        const localeName = localeInfo ? localeInfo.nativeName : locale;

        return `You are an expert technical translator specializing in blog content.
You translate from English to ${localeName} (${locale}).
You maintain the exact same formatting, structure, and technical accuracy.
You preserve all markdown formatting and special tags exactly as they appear.`;
    }

    /**
     * Build translation prompt
     * @param {string} content - Source content
     * @param {string} locale - Target locale
     * @returns {string} - Prompt text
     */
    buildPrompt(content, locale) {
        const localeInfo = locales[locale];
        const localeName = localeInfo ? localeInfo.nativeName : locale;

        const lines = [];

        lines.push(`Translate the following FastComments blog post from English to ${localeName}.`);
        lines.push('');
        lines.push('CRITICAL RULES:');
        lines.push('1. DO NOT translate code blocks (\`\`\`...\`\`\`) or inline code (\`...\`)');
        lines.push('2. DO NOT translate URLs, API endpoints, variable names, or technical identifiers');
        lines.push('3. DO NOT translate special tags like [category:name], [postlink], [/postlink], [filesize], [readtime], [postdate]');
        lines.push('4. PRESERVE all markdown formatting (headers, lists, bold, links, etc.)');
        lines.push('5. Translate ONLY the natural language text (descriptions, explanations)');
        lines.push('6. Keep the same line structure and paragraph breaks');
        lines.push('');
        lines.push('SOURCE CONTENT:');
        lines.push('---');
        lines.push(content);
        lines.push('---');
        lines.push('');
        lines.push('Return ONLY the translated content, nothing else. No explanations or notes.');

        return lines.join('\n');
    }

    /**
     * Call OpenAI API to translate content
     * @param {string} content - Source content
     * @param {string} locale - Target locale
     * @param {string} filename - For logging
     * @returns {Promise<string>} - Translated content
     */
    async translate(content, locale, filename) {
        const prompt = this.buildPrompt(content, locale);
        const systemMessage = this.getSystemMessage(locale);

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({
                    model: this.model,
                    messages: [
                        { role: 'system', content: systemMessage },
                        { role: 'user', content: prompt }
                    ],
                    max_completion_tokens: 16000
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`OpenAI API error: ${response.status} ${errorText}`);
            }

            const data = await response.json();
            const translation = data.choices?.[0]?.message?.content?.trim() || '';

            console.log(`  [translated] ${locale}/${filename} (${data.usage?.total_tokens || 0} tokens)`);

            return translation;
        } catch (error) {
            console.error(`  [error] ${locale}/${filename}: ${error.message}`);
            return null;
        }
    }
}

/**
 * Process translations with concurrent workers
 * @param {Array} tasks - Array of {locale, filename, sourceHash} objects
 * @param {TranslationClient} client - Translation client
 * @param {Object} options - Options
 * @returns {Promise<Object>} - Results summary
 */
async function processTranslations(tasks, client, options = {}) {
    const { concurrency = 5, dryRun = false, cache = {} } = options;
    const results = { success: 0, failed: 0, skipped: 0 };
    let currentIndex = 0;

    const next = () => {
        if (currentIndex < tasks.length) {
            const task = tasks[currentIndex];
            currentIndex++;
            return task;
        }
        return null;
    };

    const worker = async () => {
        while (true) {
            const task = next();
            if (!task) break;

            const { locale, filename, sourceHash } = task;
            const cacheKey = getCacheKey(locale, filename);

            try {
                const source = getSourceContent(filename);

                if (dryRun) {
                    console.log(`  [dry-run] Would translate ${locale}/${filename}`);
                    results.skipped++;
                    continue;
                }

                const translation = await client.translate(source, locale, filename);

                if (!translation) {
                    results.failed++;
                    continue;
                }

                // Save translation
                saveTranslation(locale, filename, translation);

                // Update cache with source hash and save immediately
                updateCache(cache, cacheKey, sourceHash);
                saveCache(cache);

                results.success++;
            } catch (error) {
                console.error(`  [error] ${locale}/${filename}: ${error.message}`);
                results.failed++;
            }
        }
    };

    // Start concurrent workers
    const workers = [];
    for (let i = 0; i < concurrency; i++) {
        workers.push(worker());
    }

    await Promise.all(workers);

    return results;
}

/**
 * Build list of translation tasks using cache to detect changes
 * @param {Object} cache - Current cache
 * @param {Object} options - Filter options
 * @returns {Array} - Array of tasks
 */
function buildTaskList(cache, options = {}) {
    const { filterLocale, force = false } = options;
    const tasks = [];
    const nonDefaultLocales = Object.keys(locales).filter(l => l !== defaultLocale);
    const sourceFiles = getDefaultLocaleFiles();

    for (const filename of sourceFiles) {
        const source = getSourceContent(filename);
        const sourceHash = hashContent(source);

        for (const locale of nonDefaultLocales) {
            if (filterLocale && locale !== filterLocale) continue;

            const cacheKey = getCacheKey(locale, filename);

            // Check if translation is needed using cache
            if (force || !isCached(cache, cacheKey, sourceHash)) {
                tasks.push({ locale, filename, sourceHash });
            }
        }
    }

    return tasks;
}

function parseArgs() {
    const args = process.argv.slice(2);
    const options = {
        locale: null,
        concurrency: 20,
        dryRun: false,
        force: false
    };

    for (let i = 0; i < args.length; i++) {
        switch (args[i]) {
            case '--locale':
                options.locale = args[++i];
                break;
            case '--concurrency':
                options.concurrency = parseInt(args[++i], 10);
                break;
            case '--dry-run':
                options.dryRun = true;
                break;
            case '--force':
                options.force = true;
                break;
            case '--help':
                console.log(`
Usage: node src/translate-with-gpt.js [options]

Options:
  --locale <locale>      Only translate for this locale (e.g., fr_fr, de_de)
  --concurrency <n>      Number of concurrent API calls (default: 20)
  --dry-run              Show what would be translated without making API calls
  --force                Force re-translation even if snapshot says up-to-date
  --help                 Show this help message

Environment variables:
  OPENAI_API_KEY         Required. Your OpenAI API key.
  OPENAI_MODEL           Optional. Model to use (default: gpt-4o-mini).

Examples:
  node src/translate-with-gpt.js
  node src/translate-with-gpt.js --locale fr_fr
  node src/translate-with-gpt.js --dry-run
  node src/translate-with-gpt.js --force --locale de_de
`);
                process.exit(0);
        }
    }

    return options;
}

async function main() {
    const options = parseArgs();

    if (!OPENAI_API_KEY) {
        console.error('Error: OPENAI_API_KEY environment variable is required');
        process.exit(1);
    }

    console.log(`Translation Script`);
    console.log(`Model: ${OPENAI_MODEL}`);
    console.log(`Concurrency: ${options.concurrency}`);
    if (options.locale) console.log(`Filter locale: ${options.locale}`);
    if (options.dryRun) console.log(`Mode: DRY RUN`);
    if (options.force) console.log(`Mode: FORCE (ignoring cache)`);
    console.log('');

    // Load cache
    console.log('Loading translation cache...');
    const cache = loadCache();
    const cacheEntries = Object.keys(cache).length;
    console.log(`Cache has ${cacheEntries} entries.`);
    console.log('');

    // Build task list using cache
    console.log('Scanning for translations needed...');
    const tasks = buildTaskList(cache, {
        filterLocale: options.locale,
        force: options.force
    });

    if (tasks.length === 0) {
        console.log('No translations needed matching the criteria.');
        console.log('(All translations are up-to-date based on cache)');
        process.exit(0);
    }

    console.log(`Found ${tasks.length} file(s) to translate.`);
    console.log('');

    // Group by locale for summary
    const byLocale = {};
    for (const task of tasks) {
        byLocale[task.locale] = (byLocale[task.locale] || 0) + 1;
    }
    for (const [locale, count] of Object.entries(byLocale).sort()) {
        const localeInfo = locales[locale];
        const name = localeInfo ? localeInfo.nativeName : locale;
        console.log(`  ${locale} (${name}): ${count} file(s)`);
    }
    console.log('');

    // Process translations
    console.log('Starting translations...');
    console.log('');

    const client = new TranslationClient();
    const results = await processTranslations(tasks, client, {
        concurrency: options.concurrency,
        dryRun: options.dryRun,
        cache
    });

    // Print summary
    console.log('');
    console.log('--- Summary ---');
    console.log(`Success: ${results.success}`);
    console.log(`Failed: ${results.failed}`);
    if (results.skipped > 0) {
        console.log(`Skipped (dry-run): ${results.skipped}`);
    }

    if (results.failed > 0) {
        process.exit(1);
    }
}

// Run main only if called directly
if (require.main === module) {
    main().catch(error => {
        console.error('Fatal error:', error);
        process.exit(1);
    });
}

module.exports = {
    TranslationClient,
    processTranslations,
    buildTaskList
};
