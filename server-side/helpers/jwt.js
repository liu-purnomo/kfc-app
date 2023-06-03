const jwt = require('jsonwebtoken');
const SECRETKEY = process.env.TOKEN_KEY;

const encryption = (payload) => {
    return jwt.sign(payload, SECRETKEY);
};

const decryption = (token) => {
    return jwt.verify(token, SECRETKEY);
};

module.exports = {
    encryption,
    decryption,
};