Feature('Appsero');

Scenario('login test', (I) => {
  I.amOnPage('https://dashboard.appsero.com/login');
  I.fillField('//*[@id="email"]', 'abx@gm.com');
  I.fillField('//*[@id="password"]','password');
  //I.click('Log in');
  I.click('//*[@class="appsero__submit_btn"]');
  I.see('Please use correct email and password.');
});
