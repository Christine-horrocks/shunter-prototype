var fs = require('fs');

module.exports = {
    getJSONFixture: function(path) {
        return fs.readFileSync(path, 'utf8');
    },
    getHTMLFixture: function(path) {
        return fs.readFileSync(path, 'utf8');
    }
}