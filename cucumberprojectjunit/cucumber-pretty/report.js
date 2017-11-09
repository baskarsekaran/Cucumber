$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/SearchAmazonProducts.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: baskar10576@gmail.com"
    }
  ],
  "line": 2,
  "name": "Search mi note 4 mobile in amazon.es and add to whishlist",
  "description": "",
  "id": "search-mi-note-4-mobile-in-amazon.es-and-add-to-whishlist",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 7,
      "value": "#Datadriver testing using table"
    }
  ],
  "line": 9,
  "name": "Search products in amazon es and add to whishlist",
  "description": "",
  "id": "search-mi-note-4-mobile-in-amazon.es-and-add-to-whishlist;search-products-in-amazon-es-and-add-to-whishlist",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Amazon"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter amazon url",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I went to amazon home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Enter valid product name in the search area \u003cproduct\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Click on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Sort products from low to high",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Select product",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Click Add to wish list",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "search-mi-note-4-mobile-in-amazon.es-and-add-to-whishlist;search-products-in-amazon-es-and-add-to-whishlist;",
  "rows": [
    {
      "cells": [
        "product"
      ],
      "line": 19,
      "id": "search-mi-note-4-mobile-in-amazon.es-and-add-to-whishlist;search-products-in-amazon-es-and-add-to-whishlist;;1"
    },
    {
      "cells": [
        "mi note 4 mobile"
      ],
      "line": 20,
      "id": "search-mi-note-4-mobile-in-amazon.es-and-add-to-whishlist;search-products-in-amazon-es-and-add-to-whishlist;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.write("hi baskar");
formatter.before({
  "duration": 499867,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I\u0027ve a valid set of products to access amzon.es search page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchAmazonProducts.i_ve_a_valid_set_of_products_to_access_amzon_es_search_page()"
});
formatter.result({
  "duration": 10249161571,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search products in amazon es and add to whishlist",
  "description": "",
  "id": "search-mi-note-4-mobile-in-amazon.es-and-add-to-whishlist;search-products-in-amazon-es-and-add-to-whishlist;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Amazon"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter amazon url",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I went to amazon home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Enter valid product name in the search area mi note 4 mobile",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Click on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Sort products from low to high",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Select product",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Click Add to wish list",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchAmazonProducts.i_enter_amazon_url()"
});
formatter.result({
  "duration": 66642176849,
  "status": "passed"
});
formatter.match({
  "location": "SearchAmazonProducts.i_went_to_amazon_home_page()"
});
formatter.result({
  "duration": 3985265554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mi note 4 mobile",
      "offset": 44
    }
  ],
  "location": "SearchAmazonProducts.enter_valid_product_name_in_the_search_area_mi_note_mobile(String)"
});
formatter.result({
  "duration": 3167288681,
  "status": "passed"
});
formatter.match({
  "location": "SearchAmazonProducts.click_on_search_button()"
});
formatter.result({
  "duration": 2303492639,
  "status": "passed"
});
formatter.match({
  "location": "SearchAmazonProducts.sort_products()"
});
formatter.result({
  "duration": 6421656975,
  "status": "passed"
});
formatter.match({
  "location": "SearchAmazonProducts.select_product()"
});
formatter.result({
  "duration": 7000864920,
  "status": "passed"
});
formatter.match({
  "location": "SearchAmazonProducts.click_Add_to_wish_list()"
});
formatter.result({
  "duration": 6836384042,
  "status": "passed"
});
});