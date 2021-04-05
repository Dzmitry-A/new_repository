const wait = require('../wait/wait');

let homePage =  function() {
let geoLink = element(by.css('.geolink__reg'));
let more = element.all(by.css('.services-new__more-icons'));


this.openSite = async function() {
	browser.waitForAngularEnabled(false);
	await browser.get('http://www.yandex.by');
};

this.clickGeoLink = async function() {
	await wait.waitForElementPresent(200, 30000, geoLink);
	await geoLink.click(); 
};

this.rememberContentsMore = async function () {
	 return await more.getText();
};

};

module.exports = new homePage ();



