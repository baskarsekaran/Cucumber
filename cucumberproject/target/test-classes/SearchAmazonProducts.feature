#Author: baskar10576@gmail.com
Feature: Search mi note 4 mobile in amazon.es and add to whishlist

  Background: 
    Given I've a valid set of products to access amzon.es search page

  #Datadriver testing using table
  @Amazon
  Scenario Outline: Search products in amazon es and add to whishlist
    When I enter amazon url
    Then I went to amazon home page
    When Enter valid product name in the search area <product>
    Then Click on search button
    Then Sort products from low to high
    Then Select product
    Then Click Add to wish list

    Examples: 
      | product          |
      | mi note 4 mobile |
