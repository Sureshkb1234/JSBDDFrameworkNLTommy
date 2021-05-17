const { Given, When, Then } = require('cucumber');


Given(/^User navigaes to home page$/, () => {

    browser.url(`https://nl.tommy.com/`);
    browser.maximizeWindow();

    // click Cookies accept button if it exists, 2nd time, it does not appear
    const btnAcceptCookies = $('//button[@data-testid="close-button"]');
    
    if (btnAcceptCookies.isExisting()){
        $('//button[@data-testid="close-button"]').click();
    }

});

When(/^user navigates to signup page$/, () =>{

    $('//button[@data-testid="sign-in-button"]').click();

})

Then (/^user enters the email id as \"([^\"]*)\"$/, (emailID) => {

    $('//input[@name="signin-email"]').setValue(emailID);

});

Then (/^user enters the password as \"([^\"]*)\"$/,  (password) => {
      
    $('//input[@name="signin-password"]').setValue(password);

  })

Then (/^user submits the page$/, () => {
    
    $('//button[@data-testid="Button-primary-new"]').click();
    browser.pause(1000)

  });

  Then(/^user should see the error message \"([^\"]*)\"$/,  (fillinthefield) =>  {

    const lblErrorMessage = $('//p[@id="signin-email-helper-text"]');
    expect(lblErrorMessage).toBeExisting();

  });
 
  Then(/^user should be logged in successfully$/, () => {
        browser.pause(3000) // time to load , need to improve with wait methods of webdriver
        //sign up button should NOT exist now after logged in

        expect($('//input[@name="signin-password"]')).not.toBeExisting();

  })
  