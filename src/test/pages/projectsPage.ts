import { Locator, Page, expect } from '@playwright/test';
import { fixture } from '../../hooks/fixture';

export default class ProjectsPage {
  readonly page: Page;
  readonly logoutBtn: Locator;
  readonly logoutYesBtn: Locator;
  readonly logoutNoBtn: Locator;
  readonly logo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logoutBtn = page.locator("(//button[contains(@class,'v-btn v-btn--has-bg')])[2]");
        this.logoutYesBtn = page.getByRole('button', { name: 'Yes' });
        this.logoutNoBtn = page.getByRole('button', { name: 'No' });
        // this.logoutYesBtn = page.locator("//*[@id='app']/div[5]/div/div/div[2]/div[3]/button");
        // this.logoutNoBtn = page.locator("//*[@id='app']/div[5]/div/div/div[2]/div[1]/button");
        this.logo = page.locator("img[alt='logo']");
    }

    async clickLogoutBtn() {
        await this.logoutBtn.click();
    }

    async clickLogoutYes() {
        await this.logoutYesBtn.click();
    }

    async clickLogoutNo() {
        await this.logoutNoBtn.click();
    }

    async logoutUser() {
        await this.clickLogoutBtn();
        await this.clickLogoutYes();
    }

    async checkLogo() {
        await expect(this.logo).toBeVisible()
    }
}