package com.cucumber.example;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class MavenTestClass {

	@Test
	public void launchChromeBrowser() {
		// TODO Auto-generated method stub
		
		System.out.println("Hi cucumber maven");
		System.setProperty("webdriver.chrome.driver", "D:/Baskar/Workspace/TestData/eclipse/workspace/WalletHub/lib/chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.google.com");
		driver.quit();
	}

}
