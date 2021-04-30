let yandex_Email = require('../PageObject/yandex_Email');
let decache = require('decache');


describe('Pull tests', function() {
    beforeEach(async function () {
        await browser.waitForAngularEnabled(false);
        decache('../PageObject/yandex_Email');
        yandex_Email = require('../PageObject/yandex_Email');
    });

    it('log in to the E-mail', async function() {

        await yandex_Email.openSite();

        await yandex_Email.enterEmail('ptobpkh@tut.by','7961060');

        expect(await yandex_Email.getLoginValue()).toEqual('ptobpkh@tut.by');


    });

    it('e-mail logout',async function() {

        await yandex_Email.openSite();

        await yandex_Email.enterEmail('ptobpkh@tut.by','7961060');

        await yandex_Email.logoutEmail();

        expect(await yandex_Email.checkLogout()).toEqual(true);


    });

    it('invalid password',async function() {

        await yandex_Email.openSite();

        await yandex_Email.enterEmail('ptobpkh@tut.by','111111');

        expect(await yandex_Email.getMessageError()).toEqual('Неверный пароль');

    });

    it('invalid login',async function() {

        await yandex_Email.openSite();

        await yandex_Email.enterLogin('ptobpkh12321@tut.by');

        expect(await yandex_Email.getMessageError()).toEqual('Такого аккаунта нет');

    });


});
