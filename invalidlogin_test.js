Feature('login test');
Scenario('invalid login', async  (I) => {
    I.amOnPage('https://dashboard.appsero.com');
    //username
    I.fillField('selector','abs@gm.com');
    //password 
    I.fillField('selector','password');
    //button
    I.click('');
    //assert check
    I.see('');


});

//Run command : npx codeceptjs run invalidlogin_test.js --steps