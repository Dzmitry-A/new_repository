let wait = require('../wait/wait');

let yandex_Email =  function () {
    const enterMail = element(by.css('.home-link.desk-notif-card__login-new-item.desk-notif-card__login-new-item_enter.home-link_black_yes.home-link_hover_inherit'));
    const loginInput = element(by.id('passp-field-login'));
    const passwordInput = element(by.id('passp-field-passwd'));
    const login = element(by.css('.username.desk-notif-card__user-name'));
    const exit = element(by.cssContainingText('.menu__item.usermenu__item.menu__item_type_link','Выйти'));
    const errorMessage = element(by.css('.Textinput-Hint.Textinput-Hint_state_error'));
    const servicesVideo = element(by.css('.home-link.services-new__item.services-new__item_search_yes[data-id=video]'));
    const servicesImages = element(by.css('.home-link.services-new__item.services-new__item_search_yes[data-id=images]'));
    const servicesNews = element(by.css('.home-link.services-new__item.services-new__item_search_yes[data-id=news]'));
    const servicesMaps = element(by.css('.home-link.services-new__item.services-new__item_search_yes[data-id=maps]'));
    const servicesMarket = element(by.css('.home-link.services-new__item.services-new__item_search_yes[data-id=market]'));
    const language = element(by.css('.home-link.i-bem.dropdown2__switcher.home-link_black_yes[title="Выбрать язык"]'));
    const moreLanguage = element(by.cssContainingText('.menu__text','ещё'));
    const listLanguage = element(by.css('.button.select__button.button_theme_normal.button_arrow_down.button_size_m.i-bem.button_js_inited'));
    const belarusLanguage = element(by.cssContainingText('.menu__text','Bel'));
    const buttonSkip = element(by.css('.Button2.Button2_type_link.Button2_size_l.Button2_view_pseudo.Button2_width_max'));
    const salerPersonalAccount = element(by.cssContainingText('._1AHfXkp0Kh','Личный кабинет продавца'));
    const buttonEnter = element(by.css('.Button2.Button2_size_l.Button2_view_action.Button2_width_max.Button2_type_submit'));
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
    this.loginToEmail_Actions = async function(login, password) {
        await wait.waitForPresent(enterMail, timeOut);
        await browser.actions().click(enterMail).perform();
        await wait.waitForPresent(loginInput, timeOut);
        await browser.actions().click(loginInput).sendKeys(login).perform();
        await loginInput.sendKeys(protractor.Key.ENTER);
        await wait.waitForPresent(passwordInput, timeOut);
        await browser.actions().click(passwordInput).sendKeys(password).perform();
        await passwordInput.sendKeys(protractor.Key.ENTER);
        await browser.actions().click(buttonSkip).perform();
    };
    this.loginToEmail_JSExecutor = async function(login, password) {
        await wait.waitForPresent(enterMail, timeOut);
        await browser.executeScript('arguments[0].click()', enterMail);
        await wait.waitForPresent(loginInput, timeOut);
        await browser.executeScript(`arguments[0].value='${login}'`, loginInput);

    };

    this.getLoginText = async function() {
        await wait.waitForPresent(login, timeOut);
        return await login.getText();
    };

    this.logout = async function() {
        await wait.waitForPresent(login, timeOut);
        await login.click();
        await wait.waitForPresent(exit, timeOut);
        await exit.click();
    };

    this.getPresentElement = async function() {
        await wait.waitForPresent(enterMail, timeOut);
        return await enterMail.isPresent();
    };

    this.enterLogin = async function(login) {
        await wait.waitForPresent(enterMail, timeOut);
        await enterMail.click();
        await wait.waitForPresent(loginInput, timeOut);
        await loginInput.click().sendKeys(login);
        await loginInput.sendKeys(protractor.Key.ENTER);
    };

    this.getErrorMessage = async function() {
        await wait.waitForPresent(errorMessage, timeOut);
        return await errorMessage.getText();
    };

    this.clickServicesVideo = async function() {
        await wait.waitForPresent(servicesVideo, timeOut);
        await servicesVideo.click();
    };

    this.clickServicesImages = async function() {
        await wait.waitForPresent(servicesImages, timeOut);
        await servicesImages.click();
    };

    this.clickServicesNews = async function() {
        await wait.waitForPresent(servicesNews, timeOut);
        await servicesNews.click();
    };

    this.clickServicesMaps = async function() {
        await wait.waitForPresent(servicesMaps, timeOut);
        await servicesMaps.click();
    };

    this.clickServicesMarket = async function() {
        await wait.waitForPresent(servicesMarket, timeOut);
        await servicesMarket.click();
    };
    this.setLanguageBelarus = async function() {
        await wait.waitForPresent(language, timeOut);
        await language.click();
        await wait.waitForPresent(belarusLanguage, timeOut);
        await belarusLanguage.click();
    };
    this.getLanguageText = async function() {
        await wait.waitForPresent(enterMail, timeOut);
        return await enterMail.getText();
    };

    this.scrollToMarketMagazin = async function() {
        await wait.waitForPresent(salerPersonalAccount, timeOut);
        await browser.actions().mouseMove(salerPersonalAccount).perform();
    };


};

module.exports = new yandex_Email ();