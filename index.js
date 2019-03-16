const micro = require('micro');

module.exports = fn => (req, res) => micro.run(req, res, fn);
