const crypto = require('crypto');

module.exports = function(query_string, apiSecret) {
    return crypto
        .createHmac('sha256', apiSecret)
        .update(query_string)
        .digest('hex');
}