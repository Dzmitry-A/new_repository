const onlinerPage = require('../PageObject/onlinerPage');


describe('Onliner Market', function() {
	it('work with basic controls', function() {
		
		onlinerPage.openSite();
		
		onlinerPage.clickCheckBox();

	    onlinerPage.scrollPage();

		
		const searchText = 'трассоискатель';
		const a = onlinerPage.getTextInput(searchText);
		expect(a).toEqual(searchText);

		const b = onlinerPage.getInputClassValue();
		expect(b).toEqual('fast-search__input');


	});
});