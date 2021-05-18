let wait = require('../wait/wait');

let yandexMusic = function () {
    const servicesMusic = element(by.css('.home-link.services-new__item.services-new__item_search_yes[data-id=music]'));
    const enterMail = element(by.css('.home-link.desk-notif-card__login-new-item.desk-notif-card__login-new-item_enter.home-link_black_yes.home-link_hover_inherit'));
    const loginInput = element(by.id('passp-field-login'));
    const passwordInput = element(by.id('passp-field-passwd'));
    const searchMusicInput = element(by.css('.d-input__field.deco-input.deco-input_suggest'));
    const singerList = element.all(by.css('.d-suggest-item__wrapper-link'));
    const advertising = element(by.css('.d-icon.deco-icon.d-icon_cross-big.local-icon-theme-black'));
    const singerText = element(by.css('.page-artist__title.typo-h1.typo-h1_big'));
    const singerAlbums = element.all(by.css('.d-artists'));
    const firstSound = element(by.css('.d-icon.d-icon_play'));
    const timeOut = 10000;

    this.openSite = async function() {
        await browser.get('https://yandex.by/');
    };

    this.loginToEmail = async function(login, password) {
        await wait.waitForPresent(enterMail, timeOut);
        await enterMail.click();
        await wait.waitForPresent(loginInput, timeOut);
        await loginInput.click().sendKeys(login);
        await loginInput.sendKeys(protractor.Key.ENTER);
        await wait.waitForPresent(passwordInput, timeOut);
        await passwordInput.click().sendKeys(password);
        await passwordInput.sendKeys(protractor.Key.ENTER);
    };

    this.clickServicesMusic = async function() {
        await wait.waitForPresent(servicesMusic, timeOut);
        await browser.executeScript('arguments[0].click()', servicesMusic);
    };

    this.searchMusic = async function (singer) {
        if (await advertising.isPresent()) {
            await advertising.click();
        }
        await wait.waitForPresent(searchMusicInput, timeOut);
        await searchMusicInput.click().sendKeys(singer);
        await wait.waitForPresent(singerList, timeOut);
        await browser.sleep(1000);
        await singerList.get(0).click();
    };

    this.getSingerText = async function () {
        await wait.waitForPresent(singerText, timeOut);  
        return singerText.getText();
    };

    this.checkPopularAlbums = async function (group) {
        let result = true;
        

        for (let i = 0; i <= 7; i++) {
            let a = await singerAlbums.get(i).getText();
           
            if ( a != group ) {
                 result = false;
                 break;
            } 
        }

        return result;
    };

    this.clickFirstSound = async function () {

        await wait.waitForPresent(firstSound, timeOut);
        await browser.executeScript(`document.querySelector('.button2__label').click()`);
              
        };


    
    this.isPaused = async function () {
        return await browser.executeScript(function () {
            return document.getElementsByTagName('audio')[0];
        });
    };

};
module.exports = new yandexMusic ();