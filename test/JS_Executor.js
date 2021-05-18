const yandex_Email = require('../PageObject/yandex_Email');

describe('Alternative Selenium API', function() {
    beforeEach(async function () {
        await browser.waitForAngularEnabled(false);
    });

    it('actions', async function () {

        await yandex_Email.openSite();

        await yandex_Email.loginToEmail_JSExecutor('ptobpkh@tut.by','7961060');

    });



});