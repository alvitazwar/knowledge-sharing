Feature('Important function_01');

Scenario(' Use of Grab_title', async  (I) => {
  I.amOnPage('https://www.seleniumeasy.com/test');
I.click('//*[@id="at-cv-lightbox-button-holder"]/a[2]');
  
  let title = await I.grabTitle();
  I.say(title);
  //checkig the value from grabTitle is actually equals from the seeTitleEquals
  I.seeTitleEquals(title);
  I.scrollPageToBottom();
  I.wait(3);
  I.scrollPageToTop();
  I.wait(3);
  I.scrollTo('//footer[@class="footer"]//h4[.="Popular Posts"]');
  I.wait(3); 
}).tag('@case');
// Run commands: 
// without steps: npx codeceptjs run --grep "@case" 
// with steps: npx codeceptjs run --grep "@case" --steps