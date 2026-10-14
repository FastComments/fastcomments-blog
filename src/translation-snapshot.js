const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const CACHE_FILE = path.join(__dirname, 'translation-cache.json');

/**
 * Generate MD5 hash of content
 * @param {string} content - Content to hash
 * @returns {string} - MD5 hash
 */
function hashContent(content) {
    return crypto.createHash('md5').update(content, 'utf8').digest('hex');
}

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

module.exports = {
    hashContent,
    loadCache,
    saveCache,
    getCacheKey
};
