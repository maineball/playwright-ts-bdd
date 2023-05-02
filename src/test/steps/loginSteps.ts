import { Given, When, Then } from "@cucumber/cucumber"
import { fixture } from "../../hooks/fixture";
import LoginPage from "../pages/loginPage";

const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(process.env.DEFAULT_TIMEOUT);

Given('user navigates on the application', async function () {
  const loginPage = new LoginPage(fixture.page);
  loginPage.goToHomePage();
  fixture.logger.info('Start of test')
});

When('user enters the {string} as {string}', async function (credType: string, cred: string) {
  const loginPage = new LoginPage(fixture.page);
  if (credType == 'username') {
    loginPage.setEmail(cred);
    fixture.logger.info(`Email is: ${cred}`);    
  } else {
    loginPage.setPw(cred);
  }
});

Then('user clicks on the Forgot Password? link', async function () {
  fixture.logger.info(fixture.page.url)
  const loginPage = new LoginPage(fixture.page);
  loginPage.clickForgotPwLink();
});

When('user clicks on the login button', async function () {
  const loginPage = new LoginPage(fixture.page);
  loginPage.clickLogin();
});

When('user is redirected to the Login Page', async function () {
  const loginPage = new LoginPage(fixture.page);
  loginPage.checkLoginPage();
});
