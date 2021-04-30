let workBrowserTab =  function () {

    this.switchNewTab = async function () {
        const handles = await browser.getAllWindowHandles();
        await browser.driver.switchTo().window(handles[1]);
    };

    this.closeTab = async function () {
        const handles = await browser.getAllWindowHandles();
        await browser.driver.close();
        await browser.driver.switchTo().window(handles[0]);
    };
};

module.exports = new workBrowserTab();