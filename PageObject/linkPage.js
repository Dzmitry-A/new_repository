const wait = require('../wait/wait');

let linkPage = function() {
let cityInput = element (by.id('city__front-input'));


this.setCity = async function (name) {
	
	
	await wait.waitForElementPresent(200, 30000, cityInput);
	await cityInput.clear().sendKeys(name);
	let pop_upList = element(by.cssContainingText('.b-autocomplete-item__reg', name));
	await browser.wait(protractor.ExpectedConditions.presenceOf(pop_upList), 1000);
	await pop_upList.click();

	
	};


};

module.exports = new linkPage ();



