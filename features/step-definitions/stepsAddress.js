
const { Given, When, Then } = require('cucumber');


When(/^user logged in to the application with credentials as \"([^\"]*)\" and \"([^\"]*)\"$/,  (emailID,password) =>  {
    $('//button[@data-testid="sign-in-button"]').click();
    $('//input[@name="signin-email"]').setValue(emailID);
    $('//input[@name="signin-password"]').setValue(password);
    $('//button[@data-testid="Button-primary-new"]').click();
    browser.pause(1000)
    expect($('//input[@name="signin-password"]')).not.toBeExisting();


});

When(/^user navigates to Add New Address page$/,  () => {

    //click on user name (signed in ) image 
    $('//a[@class="header__action account-link"]').click();

    //click on directory link
    $('//*[@id="root"]/div/div[1]/ul/li[3]/a').click();

    //click 'Add new Address' button
    $('//button[@data-testid="address-add-button"]').click();

});

When(/^user adds a new address with first name as (.+)$/, (firstname) => {

    //first name
    $('//input[@name="firstName"]').setValue(firstname);

});
  
When(/^user adds a new address with last name as (.+)$/, (lastname) => {
    //last name
    $('//input[@name="lastName"]').setValue(lastname);   

});
  
When(/^user adds a new address with street as (.+)$/,  (street) => {

    //street
    $('//input[@name="address1"]').setValue(street);
   
});
  
When(/^user house number as (.+)$/, (housenumber) => {

    //house number and addition
    $('//input[@name="address2"]').setValue(housenumber);
    
});
  
When(/^user place as (.+)$/, (place) => {

    //place
    $('//input[@name="city"]').setValue(place);
    

});
  
When(/^user postal code as (.+)$/,  (postalcode) => {

    //postal code
    $('//input[@name="zipCode"]').setValue(postalcode);
   

});

When(/^user enters phone number as (.+)$/,  (phonenumber) => {

    //Phone - optional
    $('//input[@name="phone1"]').setValue(phonenumber);

})


When(/^user country as (.+)$/,  (country) =>  {

    //Country - optional (Select by Code because it is displaying differnet values for Dutch and English . ex: Dutch: Netherland, English: The Netherland)
    const selectBox = $('//select[@name="country"]');
    // selectBox.selectByAttribute (country);

    browser.pause(20000)

});
  
When(/^saves the address$/, () => {

    //click save button
    $('//button[@data-testid="address-save-button"]').click();

});
  
When(/^user should see the message as \"([^\"]*)\"$/, (addressaddedsuccessfully) => {


});

