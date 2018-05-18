var assert = require('assert');
var helper = require('shunter').testhelper();
var fs = require('fs');

var passed_json = fs.readFileSync('/Users/Allan/parliament/shunter-prototype/test/fixtures/json/home_page.json', 'utf8');
var expected_html = fs.readFileSync('/Users/Allan/parliament/shunter-prototype/test/fixtures/html/home_page.html', 'utf8');
console.log(JSON.parse(passed_json));

describe('Foo bar', function() {
    before(function() {
        helper.setup(
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
    after(helper.teardown);

    it('should render the homepage', function(done) {
        helper.render('layout', JSON.parse(passed_json), function(error, dom, output) {
            assert.strictEqual(expected_html, output);
            done();
        });
    })
});