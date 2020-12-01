Feature('Important functions_03');
Scenario(' Use of Date picker',async (I)=>{
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

}).tag('@case');
