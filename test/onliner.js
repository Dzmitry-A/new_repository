const onlinerPage = require('../PageObject/onlinerPage');


describe('Onliner Market', function() {
	it('work with basic controls', function() {
		
		onlinerPage.openSite();
		
		onlinerPage.clickCheckBox();

	    onlinerPage.scrollPage();

		

		let a = onlinerPage.getTextInput('трассоискатель');
		expect(a).toEqual('трассоискатель');

		let b = onlinerPage.getAttributeInput();
		expect(b).toEqual('fast-search__input');


	});
});