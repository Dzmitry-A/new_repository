let yandex_Email = require('../PageObject/yandex_Email');
let workBrowserTab = require('../browserTab/workBrowserTab');

describe('Pull tests', function() {
    beforeEach(async function () {
        await browser.waitForAngularEnabled(false);
    });

    it('yandex language', async function () {

        await yandex_Email.openSite();

        await yandex_Email.setLanguage();

        expect(await yandex_Email.getLanguageValue()).toEqual('Увайсці');

    });

});