Feature: Update Existing Virtual Account

  Scenario: Validate Success Update Expiration Date to Any Other Valid Date and Verify it Changed
    Given Send patch method request to server for update expiration date to "2022-09-27T17:00:00.000Z"

  Scenario Outline: Validate Failed Update Expiration Date Because Wrong Input Request Value
    Given Send patch method request with "<invalid date>" input to server and return status 400
    Examples:
      | invalid date             |
      | 2022-13-09T17:00:00.000Z |
      | 2022-07-33T17:00:00.000Z |
      | 2022-09-27T25:00:00.000Z |