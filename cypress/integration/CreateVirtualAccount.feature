Feature: Create Virtual Account

  Scenario: Validate Success Create Virtual Account
    Given User "Reky" send post method request to create new "mandiri" virtual account then success

  Scenario: Verify Failed Create Virtual Account by Input Wrong Bank
    Given User send post method request to create new virtual account with uncover bank then return 400

  Scenario: Verify Success Activate Virtual Account
    Given User send get method request to activated their virtual account