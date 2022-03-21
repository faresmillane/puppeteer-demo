Feature: My first test

Background: start navigator
    Given I start the navigator

Scenario: learn automation test google
    Given I navigate to home page
    When I fill davidson-consulting in the bar search
    And I click on the search button
    Then I see the result label
