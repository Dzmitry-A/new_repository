let yandex_Email = require('../PageObject/yandex_Email');
let workBrowserTab = require('../browserTab/workBrowserTab');

describe('Pull tests', function() {
    beforeEach(async function () {
        await browser.waitForAngularEnabled(false);
    });

    it('yandex services navigation', async function () {

        await yandex_Email.openSite();

        await yandex_Email.clickServicesVideo();

        await workBrowserTab.switchNewTab();

        expect(await browser.getCurrentUrl()).toEqual('https://yandex.by/video?utm_source=main_stripe_big');

        await workBrowserTab.closeTab();

        await yandex_Email.clickServicesImages();

        await workBrowserTab.switchNewTab();

        expect(await browser.getCurrentUrl()).toEqual('https://yandex.by/images/?utm_source=main_stripe_big');

        await workBrowserTab.closeTab();

        await yandex_Email.clickServicesNews();

        await workBrowserTab.switchNewTab();

        expect(await browser.getCurrentUrl()).toEqual('https://yandex.by/news/?utm_source=main_stripe_big');

        await workBrowserTab.closeTab();

        await yandex_Email.clickServicesMaps();

        await workBrowserTab.switchNewTab();

        expect(await browser.getCurrentUrl()).toContain('https://yandex.by/maps/153');

        await workBrowserTab.closeTab();

        await yandex_Email.clickServicesMarket();

        await workBrowserTab.switchNewTab();

        expect(await browser.getCurrentUrl()).toEqual('https://market.yandex.by/?clid=505&utm_source=main_stripe_big');

        await workBrowserTab.closeTab();

    });

});