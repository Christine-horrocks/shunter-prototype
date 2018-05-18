var assert = require('assert');
var shunterTestHelper = require('shunter').testhelper();
var fixtureHelper = require('../../helpers/fixture-helper');
var paths = require('../../helpers/walk-helper');

var json_fixture = fixtureHelper.getJSONFixture('home_page');
var expected_html = fixtureHelper.getHTMLFixture('home_page');

describe('Home page', function() {
    before(function() {
        shunterTestHelper.setup(paths); 
    });

    after(shunterTestHelper.teardown);

    it('should render the homepage', function(done) {
        shunterTestHelper.render('layout', json_fixture, function(error, dom, output) {
            assert.strictEqual(expected_html, output);
            done();
        });
    })
});