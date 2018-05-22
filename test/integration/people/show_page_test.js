var assert = require('assert');
var shunterTestHelper = require('shunter').testhelper();
var fixtureHelper = require('../../helpers/fixture-helper');
var paths = require('../../helpers/walk-helper');

var beautifyHTML = require('js-beautify').html;

describe('People page', function() {
    before(function() {
        shunterTestHelper.setup(paths); 
    });
    
    after(shunterTestHelper.teardown);
    
    it('should render the people show page', function(done) {
        var jsonFixture = fixtureHelper.getJSONFixture('show_page');
        var expectedHTML = fixtureHelper.getHTMLFixture('show_page');

        shunterTestHelper.render('layout', jsonFixture, function(error, dom, output) {
            assert.strictEqual(beautifyHTML(expectedHTML), beautifyHTML(output));
            
            done();
        });
    })
});
