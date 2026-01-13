const crypto = require('crypto');

/**
 * Generate MD5 hash of content
 * @param {string} content - Content to hash
 * @returns {string} - MD5 hash
 */
function hashContent(content) {
    return crypto.createHash('md5').update(content, 'utf8').digest('hex');
}

module.exports = {
    hashContent
};
