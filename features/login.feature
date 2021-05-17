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
    
    # Scenario: Verify that logged in user can add a new address
    #     When user navigates to signup page  
    #     And user enter the email id as "su.kmr0078@gmail.com"
    #     And user enters the password as "Mytommy123@"
    #     And submit the page
    #     And user should view the name of user as "Hi!"
    #     And user navigates to Account Information page
    #     And user navigages to directory page
    #     And user adds a new address with first name as "firstname"
    #     And user adds a new address with last name as "sdf"
    #     And user adds a new address with street as ""
    #     And user house number as ""
    #     And user place as ""
    #     And user postal code as ""
    #     And user country as ""
    #     And saves the address
    #     Then user should see the message as "Address added successfully"
