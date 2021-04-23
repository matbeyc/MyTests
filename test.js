const puppeteer = require("puppeteer");

describe('first test in puppeteer',function(){
    it('launch firs browser',async function(){
        this.timeout(10000);
        const browser = await puppeteer.launch({
                       timeout: 10000,
                       headless: false,
                       defaultViewport: {
                           width: 1200,
                           height: 500
                     }
                });
            
        const page = await browser.newPage();
        await page.goto('https://www.vl.ru/eda/checkout', {waitUntil: 'load'});
        await browser.close();
    });
});