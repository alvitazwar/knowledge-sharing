const { isObject } = require("util");

Feature('Important function');

// Scenario('Use of Grab_title', async  (I) => {
//   I.amOnPage('https://www.seleniumeasy.com/test');
//I.click('//*[@id="at-cv-lightbox-button-holder"]/a[2]');
  
//   let title = await I.grabTitle();
//   I.say(title);
//   //checkig the value from grabTitle is actually equals from the seeTitleEquals
//   I.seeTitleEquals(title);
//   I.scrollPageToBottom();
//   I.wait(3);
//   I.scrollPageToTop();
//   I.wait(3);
//   I.scrollTo('//footer[@class="footer"]//h4[.="Popular Posts"]');
//   I.wait(3); 
// });

//  Scenario('Use of Grab_textfrom', async  (I) => {
//      I.amOnPage('https://www.seleniumeasy.com/test/');
//      I.click('//*[@id="at-cv-lightbox-button-holder"]/a[2]');
//      let post = await I.grabTextFrom('//footer[@class="footer"]//h4[.="Popular Posts"]');
//      I.say(post);  
//    });

// Scenario('Use of Modal', async  (I) => {
//     I.amOnPage('https://www.seleniumeasy.com/test/');
//     I.click('//*[@id="at-cv-lightbox-button-holder"]/a[2]');
//     I.click('//ul[@class="nav navbar-nav navbar-right"]/li[2]/a[@href="#"]');
//     I.click('//ul[@class="dropdown-menu"]//a[@href="./bootstrap-modal-demo.html"]');
//     I.wait(3);
//     I.click('//a[@href="#myModal0"]');
//     I.click('Save changes');
//     });
Scenario('Use of Date picker',async (I)=>{
    I.amOnPage('https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html');
    //I.click('//*[@id="at-cv-lightbox-button-holder"]/a[2]');
    I.click('//*[@id="sandbox-container1"]/div/input');
    I.fillField('//*[@id="sandbox-container1"]/div/input','20/9/2020');
    I.pressKey('Enter');
    I.wait(4);
    I.clearField('//*[@id="sandbox-container1"]/div/input');
    I.refreshPage();
    I.click('//*[@id="sandbox-container1"]/div/input');
    I.click('//div[3]/div[1]/table/tbody/tr[5]/td[5]');
    I.clearField('//*[@id="sandbox-container1"]/div/input');
    I.click('//*[@id="sandbox-container1"]/div/input');
    I.click('//div[@class="datepicker-days"]/table[@class="table-condensed"]//th[@class="today"]');
    // let logs = await I.grabBrowserLogs();
    // console.log(JSON.stringify(logs))
    let url = await I.grabCurrentUrl();
    console.log(`Current URL is [${url}]`);

});
