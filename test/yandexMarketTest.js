let yandexMarket = require('../PageObject/yandexMarket');
let workBrowserTab = require('../browserTab/workBrowserTab');
let decache = require('decache');

describe('Pull tests #2', function() {
    beforeEach(async function () {
        await browser.waitForAngularEnabled(false);
        decache('../PageObject/yandexMarket');
        yandexMarket = require('../PageObject/yandexMarket');
    });

    it('add to comparison', async function () {

        await yandexMarket.openSite();

        await yandexMarket.clickServicesMarket();

        await workBrowserTab.switchNewTab();

        await yandexMarket.enterTextInput('Note 8');

        let Phones1 = await yandexMarket.getTextSmartphone1();

        let Phones2 = await yandexMarket.getTextSmartphone2();

        await yandexMarket.addToComparison();

        expect(Phones1).toContain(await yandexMarket.getTextPhones1());
        expect(Phones2).toContain(await yandexMarket.getTextPhones2());

    });

    it('deleting added products', async function () {

        await yandexMarket.openSite();

        await yandexMarket.clickServicesMarket();

        await workBrowserTab.switchNewTab();

        await yandexMarket.enterTextInput('Note 8');

        let Phones1 = await yandexMarket.getTextSmartphone1();

        let Phones2 = await yandexMarket.getTextSmartphone2();

        await yandexMarket.addToComparison();

        expect(Phones1).toContain(await yandexMarket.getTextPhones1());
        expect(Phones2).toContain(await yandexMarket.getTextPhones2());

        await yandexMarket.deletePhonesComparison();

        expect(await yandexMarket.getTextCompare()).toEqual('Сравнивать пока нечего');

    });

    it('sort by price', async function () {

        await yandexMarket.openSite();

        await yandexMarket.clickServicesMarket();

        await workBrowserTab.switchNewTab();

        await yandexMarket.goSectionActionCameras();

        await yandexMarket.sortByPrice();

        expect(await yandexMarket.checkSorting()).toEqual(true);

    });

    it('sort by tag', async function () {

        await yandexMarket.openSite();

        await yandexMarket.clickServicesMarket();

        await workBrowserTab.switchNewTab();

        await yandexMarket.goSectionRefrigerator();

        await yandexMarket.sortByTagWidth(50);

        expect(await yandexMarket.checkSortingTagWidth()).toEqual(true);
    });

});