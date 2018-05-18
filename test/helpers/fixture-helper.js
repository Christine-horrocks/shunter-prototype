var fs = require('fs');

module.exports = {
    getJSONFixture: function(path) {
        return JSON.parse(fs.readFileSync(path, 'utf8'));
    },
    getHTMLFixture: function(path) {
        return fs.readFileSync(path, 'utf8');
    }
}