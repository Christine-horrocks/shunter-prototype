var assert = require('assert');
var shunterTestHelper = require('shunter').testhelper();
var fixtureHelper = require('../../helpers/fixture-helper');
var paths = require('../../helpers/walk-helper');

var jsonFixture = fixtureHelper.getJSONFixture('home_page');
var expectedHTML = fixtureHelper.getHTMLFixture('home_page');

describe('Home page', function() {
    before(function() {
        shunterTestHelper.setup(paths); 
    });

    after(shunterTestHelper.teardown);

    it('should render the homepage', function(done) {
        shunterTestHelper.render('layout', jsonFixture, function(error, dom, output) {
            assert.strictEqual(expectedHTML, output);
            done();
        });
    })
});