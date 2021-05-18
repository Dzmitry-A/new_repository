let wait = require('../wait/wait');

let yandexMarket = function () {
    const servicesMarket = element(by.css('.home-link.services-new__item.services-new__item_search_yes[data-id=market]'));
    const searchMarketInput = element(by.css('.nQ8aBP7fBN'));
    const list = element.all(by.css('._2et7ag2eiP._3YfPcv73Wj._1rDffWmsUY'));
    const buttonComparison = element(by.css('.zsSJkfeAPw._2sWJL7-h2E._16jABpOZ2-.gjdzW5ajbI.x5ZEihgKEK'));
    const listPhones = element.all(by.css('._3dCGE8Y9v3.cLo1fZHm2y'));
    const phones = element.all(by.css('._27nuSZ19h7.PzFNvA3yUm.cia-cs'));
    const buttonDeleteList = element(by.css('._1KpjX8xME8._1KU3sPkiT1'));
    const textCompare = element(by.css('._2szVRO2K75'));
    const linkElectronics = element(by.cssContainingText('._3z8GfB4w3a','Электроника'));
    const linkActionCameras1 = element(by.cssContainingText('._2qvOOvezty._2x2zBaVN-3._9qbcyI_fyS','Экшн-камеры'));
    const linkActionCameras2 = element(by.cssContainingText('._2qvOOvezty.SvBTI5gwNn._9qbcyI_fyS','Экшн-камеры'));
    const buttonSortByPrice1 = element(by.css('[data-autotest-id="dprice"]')); 
    const buttonSortByPrice2 = element(by.css('[data-autotest-id="aprice"]'));
    const priceActionCameras = element.all(by.css('._3NaXxl-HYN._3f2ZtYT7NH._1f_YBwo4nE'));
    const linkAppliances = element(by.cssContainingText('._3z8GfB4w3a','Бытовая техника'));
    const linkRefrigerator = element(by.cssContainingText('._2qvOOvezty._2x2zBaVN-3._9qbcyI_fyS','Холодильники'));
    const sortWidthInput = element(by.id('15464317to'));
    const dimensionsRefrigerator = element.all(by.xpath("//li[contains(text(),'см')]"));
    const timeOut = 10000;

    this.openSite = async function() {
        await browser.get('https://yandex.by/');
    };

    this.clickServicesMarket = async function() {
        await wait.waitForPresent(servicesMarket, timeOut);
        await servicesMarket.click();
    };

    this.enterTextInput = async function (text) {
        await wait.waitForPresent(searchMarketInput, timeOut);
        await searchMarketInput.click().sendKeys(text);
        await searchMarketInput.sendKeys(protractor.Key.ENTER);
    };

    this.getTextSmartphone1 = async function () {
        await wait.waitForPresent(listPhones, timeOut);
        return listPhones.get(0).getText();
    }; 

    this.getTextSmartphone2 = async function () {
        await wait.waitForPresent(listPhones, timeOut);
        return listPhones.get(1).getText();
    }; 

    this.addToComparison = async function () {
        await wait.waitForPresent(list, timeOut);
        await list.get(0).click();
        await list.get(1).click();
        await wait.waitForPresent(buttonComparison, timeOut);
        await browser.executeScript('arguments[0].click()', buttonComparison);
    };

    this.getTextPhones1 = async function () {
        await wait.waitForPresent(phones, timeOut);
        return phones.get(0).getText();
    };

    this.getTextPhones2 = async function () {
        await wait.waitForPresent(phones, timeOut);
        return phones.get(1).getText();
    };

    this.deletePhonesComparison = async function () {
        await wait.waitForPresent(buttonDeleteList, timeOut);
        await buttonDeleteList.click();
    };

    this.getTextCompare = async function () {
        await wait.waitForPresent(textCompare, timeOut);
        return textCompare.getText();
    };

    this.goSectionActionCameras = async function () {
        await wait.waitForPresent(linkElectronics, timeOut);
        await linkElectronics.click();
        await wait.waitForPresent(linkActionCameras1, timeOut);
        await linkActionCameras1.click();
        await wait.waitForPresent(linkActionCameras2, timeOut);
        await linkActionCameras2.click();
    };

    this.sortByPrice = async function () {
        await wait.waitForPresent(buttonSortByPrice1, timeOut); 
        await buttonSortByPrice1.click();
        await wait.waitForPresent(buttonSortByPrice2, timeOut); 
        await buttonSortByPrice2.click();
        
    };

    this.checkSorting = async function () {
        let result = true;
        browser.sleep(3000);

        for (let i = 0; i <= 20; i++) {
            let a = (await priceActionCameras.get(i).getText()).replace(/[^\d.+]/g, '');
            let b = (await priceActionCameras.get(i+1).getText()).replace(/[^\d.+]/g, '');
            if ( a < b ) {
                 result = false;
                 break;
            }
        }

        return result;
    
    }; 

    this.goSectionRefrigerator = async function () {
        await wait.waitForPresent(linkAppliances, timeOut);
        await browser.executeScript('arguments[0].click()', linkAppliances);
        await wait.waitForPresent(linkRefrigerator, timeOut);
        await linkRefrigerator.click();
   
    };

    this.sortByTagWidth = async function (width) {
        await wait.waitForPresent(sortWidthInput, timeOut); 
        await sortWidthInput.click().sendKeys(width);
        await browser.sleep(5000);
        
    };

    this.checkSortingTagWidth = async function () {
        let result = true;
        

        for (let i = 0; i <= 20; i++) {
            let a = (await dimensionsRefrigerator.get(i).getText()).slice( 8, 9 );
           
            if ( a > 50 ) {
                 result = false;
                 break;
            } 
        }

        return result;
    };

};
module.exports = new yandexMarket ();