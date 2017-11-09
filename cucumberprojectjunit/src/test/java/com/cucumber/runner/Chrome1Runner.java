package com.cucumber.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true
		,features = {"src/test/resources/SearchAmazonProducts.feature"}
		,plugin = {"pretty:STDOUT","html:D:\\Baskar\\Workspace\\TestData\\eclipse\\eclipse neon\\eclipse-jee-neon-2-win32-x86_64\\Workspace\\cucumberprojectjunit\\cucumber-pretty"}
		,monochrome = true
		,glue = {"com.cucumber.example"}
		)
public class Chrome1Runner {


}
