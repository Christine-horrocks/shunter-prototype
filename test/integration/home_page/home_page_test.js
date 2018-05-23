var assert = require('assert');
var shunterTestHelper = require('shunter').testhelper();
var fixtureHelper = require('../../helpers/fixture-helper');
var paths = require('../../helpers/walk-helper');

var b = require('js-beautify').html;

describe('Home page', function() {
    before(function() {
        shunterTestHelper.setup(paths); 
    });
    
    after(shunterTestHelper.teardown);
    
    it('should render the homepage', function(done) {
        var jsonFixture = fixtureHelper.getJSONFixture('home_page');

        shunterTestHelper.render('layout', jsonFixture, function(error, dom, output) {
            var expectedHTML = fixtureHelper.getHTMLFixture('home_page');

            assert.strictEqual(b(expectedHTML), b(output));

            done();
        });
    })
});
