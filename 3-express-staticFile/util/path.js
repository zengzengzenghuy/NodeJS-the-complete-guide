const path = require('path');
// get the root direction of the index.js (where nodejs will execute)
module.exports = path.dirname(require.main.filename);