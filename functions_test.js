const { waitForDebugger } = require("inspector");

Feature('Name of the feature');
// Scenario('Grab titles', async  (I) => {
// I.amOnPage('https://www.seleniumeasy.com/test/');
// I.click('//div[@id="at-cv-lightbox-button-holder"]/a[@href="#"]');
// let title = await I.grabTitle();
// I.say(title);
// I.seeTitleEquals(title);
// I.scrollPageToBottom();
// I.wait(3);
// I.scrollPageToTop();
// I.wait(3);
// I.scrollTo('//body/footer');
// I.wait(3);
// I.see('Tutorials Menu');

// });
// Scenario('Grab text', async  (I) => {
//     I.amOnPage('https://www.seleniumeasy.com/test/');
//     I.click('//div[@id="at-cv-lightbox-button-holder"]/a[@href="#"]');
//     let post = await I.grabTextFrom('//h4[.="Popular Posts"]');
//     I.say(post);
//     I.click('//ul[@id="treemenu"]/li/ul/li[2]/a[@href="#"]');
//     I.click('//li/ul/li[2]/ul//a[@href="./bootstrap-date-picker-demo.html"]');
//     let url = await I.grabCurrentUrl();
//     //I.say(url);
//     console.log(`My current page url is [${url}]`);
// });

// Scenario('Modal', async  (I) => {
//     I.amOnPage('https://www.seleniumeasy.com/test/bootstrap-modal-demo.html');
//     I.click('//div[@class="col-md-6 text-left"]//a[@href="#myModal0"]');
//     I.click('Save changes');
// });
Scenario('Calender', async  (I) => {
    I.amOnPage('https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html');
    //Write down a date and keyboard operation
    I.click('//*[@id="sandbox-container1"]/div/input');
    I.fillField('//*[@id="sandbox-container1"]/div/input','20/9/2020');
    I.pressKey('Enter');
    I.wait(4);
    I.clearField('//*[@id="sandbox-container1"]/div/input');
    I.refreshPage();
    I.click('//*[@id="sandbox-container1"]/div/input');
    I.click('//table[@class="table-condensed"]/tbody/tr[1]/td[2]');
    I.wait(2);
    I.clearField('//*[@id="sandbox-container1"]/div/input');
    I.refreshPage()
    I.click('//*[@id="sandbox-container1"]/div/input');
    I.click('//div[@class="datepicker-days"]/table[@class="table-condensed"]//th[@class="today"]');
    
    

});
