let yandexMusic = require('../PageObject/yandexMusic');
let workBrowserTab = require('../browserTab/workBrowserTab');
let decache = require('decache');


describe('Pull tests #2', function() {
    beforeEach(async function () {
        await browser.waitForAngularEnabled(false);
        decache('../PageObject/yandexMusic');
        yandexMusic = require('../PageObject/yandexMusic');
    });

    it('yandex music', async function () {

        await yandexMusic.openSite();

        await yandexMusic.loginToEmail('ptobpkh@tut.by','7961060');

        await yandexMusic.clickServicesMusic();

        await workBrowserTab.switchNewTab();

        await yandexMusic.searchMusic('Metal');

        expect (await yandexMusic.getSingerText()).toEqual('Metallica');

        expect (await yandexMusic.checkPopularAlbums('Metallica')).toEqual(true);
        
    });

    it('music playback', async function () {

        await yandexMusic.openSite();

        await yandexMusic.loginToEmail('ptobpkh@tut.by','7961060');

        await yandexMusic.clickServicesMusic();

        await workBrowserTab.switchNewTab();

        await yandexMusic.searchMusic('beyo');

        await browser.sleep(3000);

        await yandexMusic.clickFirstSound();

        expect (await yandexMusic.isPaused()).toBe(false);

        await yandexMusic.clickFirstSound();

        expect (await yandexMusic.isPaused()).toBe(true);

        });
   
});