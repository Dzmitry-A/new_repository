exports.config = {
    framework: 'jasmine2',
    onPrepare: function () {

        var AllureReporter = require('jasmine-allure-reporter');

        //allure report
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        /*
         * It will take screenshot after each Jasmine function 'it'
         */
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./test/JS_Executor.js'],
    directConnect: true
}