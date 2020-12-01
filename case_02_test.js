Feature('Important functions_02');
 Scenario('Use of Grab_textfrom', async  (I) => {
         I.amOnPage('https://www.seleniumeasy.com/test/');
         I.click('//*[@id="at-cv-lightbox-button-holder"]/a[2]');
         let post = await I.grabTextFrom('//footer[@class="footer"]//h4[.="Popular Posts"]');
         I.say(post);  
       }).tag('@case');