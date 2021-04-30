const homePage = require('../PageObject/homePage');
const linkPage = require('../PageObject/linkPage');

describe('Yandex', function() {
	it('compare tabs yet', function() {
		
		homePage.openSite();
		
		homePage.clickGeoLink();
		linkPage.setCity('Лондон');
		let a = homePage.rememberContentsMore();
		
		browser.sleep(1000);
		homePage.clickGeoLink();
		linkPage.setCity('Париж');
		let b = homePage.rememberContentsMore();
		
		expect(a).toEqual(b);
		
	});
});