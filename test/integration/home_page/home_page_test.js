var assert = require('assert');
var shunterTestHelper = require('shunter').testhelper();
var fixtureHelper = require('../../helpers/fixture-helper');

var passed_json = fixtureHelper.getJSONFixture('/Users/Allan/parliament/shunter-prototype/test/fixtures/json/home_page/home_page.json');
var expected_html = fixtureHelper.getHTMLFixture('/Users/Allan/parliament/shunter-prototype/test/fixtures/html/home_page/home_page.html');

describe('Home page', function() {
    before(function() {
        shunterTestHelper.setup(
            '../../../view/layout.dust',
            '../../../view/components/cookie-banner.dust',
            '../../../view/components/banner.dust',
            '../../../view/components/header.dust',
            '../../../view/components/hero.dust',
            '../../../view/components/home-page-subheading.dust',
            '../../../view/components/list-component.dust',
            '../../../view/components/highlight-component.dust',
            '../../../view/components/content.dust',
            '../../../view/components/footer.dust'
        ); 
    });

    after(shunterTestHelper.teardown);

    it('should render the homepage', function(done) {
        shunterTestHelper.render('layout', passed_json, function(error, dom, output) {
            assert.strictEqual(expected_html, output);
            done();
        });
    })
});