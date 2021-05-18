exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./test/Email.js'],
    directConnect: true,
    restartBrowserBetweenTests: true
}