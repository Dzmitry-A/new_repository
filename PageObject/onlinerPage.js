const wait = require('../wait/wait');

let onlinerPage =  function() {
    const checkBoxApple = element(by.cssContainingText('.schema-filter__checkbox-text','Apple'));
    const searchInput = element(by.css('.fast-search__input'));
    const pop_upList = element(by.css('.search__result:nth-child(3)'));
    
    this.openSite = async function() {
        browser.waitForAngularEnabled(false);
        await browser.get('https://catalog.onliner.by/mobile');
    };
   
    this.clickCheckBox = async function() {
        await wait.waitForPresent(checkBoxApple, 5000);
        await checkBoxApple.click(); 
    };

    this.scrollPage = async function() {
        await browser.executeScript('window.scrollTo(0, document.body.scrollHeight)');
        await browser.sleep(3000);
        await browser.executeScript('window.scrollTo(0, -document.body.scrollHeight)')
    };

    this.clickOnTheDropdown = async function(text) {
        await wait.waitForPresent(searchInput, 5000);
        await searchInput.click().sendKeys(text); 
        await browser.sleep(3000);
        await wait.waitForPresent(pop_upList, 5000);
	    await pop_upList.sendKeys(protractor.Keys.ENTER);

    };

    this.getTextInput = async function(text) {
        await wait.waitForPresent(searchInput, 5000);
        await searchInput.click().sendKeys(text); 
        return await searchInput.getAttribute('value');
    };

    this.getInputClassValue = async function() {
        return await searchInput.getAttribute('class');
    };
};

module.exports = new onlinerPage ();