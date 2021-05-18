@mytest
Feature: Test the login functionality and add a new address
    As a user
    I want to be able to login to the website and add a new address

    Background:
        Given User navigaes to home page

    Scenario: Verify that user could see specific errors when password is blank
        When user navigates to signup page
        And user enters the email id as "someghing@email.com"
        And user enters the password as ""
        And user submits the page
        Then user should see the error message "Fill in the field"

    Scenario: Verify that user could see specific errors when email id is blank
        When user navigates to signup page
        And user enters the email id as ""
        And user enters the password as "Mytommy123@"
        And user submits the page
        Then user should see the error message "Fill in the field"

    Scenario: Verify that user can login with valid data
        When user navigates to signup page  
        And user enters the email id as "su.kmr0078@gmail.com"
        And user enters the password as "Mytommy123@"
        And user submits the page
        Then user should be logged in successfully
        
    Scenario Outline: Verify that logged in user can add a new address
        When user logged in to the application with credentials as "su.kmr0078@gmail.com" and "Mytommy123@"
        And user navigates to Add New Address page
        And user adds a new address with first name as <First_Name>
        And user adds a new address with last name as <Last_Name>
        And user adds a new address with street as <Street>
        And user house number as <House_Number>
        And user place as <Place>
        And user postal code as <Postal_Code>   #<<---- Bug , after entering post code , press tab key, blank screen comes
        And user enters phone number as <Phone_Number>
        And user country as <Country>
        And saves the address
        Then user should see the message as "Address added successfully"
    Examples: 
      | First_Name | Last_Name | Street   | House_Number | Place  | Postal_Code | Phone_Number | Country        | 
      | MyfName    | MylName   | Mystreet | HN123        | London | IG117PS     | 07474783373 | GB | 
  