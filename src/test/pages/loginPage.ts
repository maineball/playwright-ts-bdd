import { Locator, Page, expect } from '@playwright/test';
import { fixture } from '../../hooks/fixture';

export default class LoginPage {
  readonly page: Page;
  readonly emailField: Locator;
  readonly pwField: Locator;
  readonly loginBtn: Locator;
  readonly forgotPwLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailField = page.locator("//input[@placeholder='Type your email address']");
        this.pwField = page.locator("//input[@placeholder='Type your password']");
        this.loginBtn = page.locator("//button[@type='submit']");
        this.forgotPwLink = page.locator("//a[contains(text(),'Forgot Password?')]");
    }

    async goToHomePage() {
        await this.page.goto(process.env.BASEURL);   
        fixture.logger.info(`Connect to: ${this.page.url()}`);
    }

    async setEmail(cred: string) {
        await this.emailField.type(cred);
    }

    async setPw(cred: string) {
        await this.pwField.type(cred);
    }

    async clickLogin() {
        await this.loginBtn.click();
    }

    async loginUser(username: string, password: string) {
        await this.setEmail(username);
        await this.setPw(password);
        await this.clickLogin();
    }

    async clickForgotPwLink() {
        await this.forgotPwLink.click();
    }

    async checkLoginPage() {
        await expect(this.loginBtn).toBeVisible()
    }
}