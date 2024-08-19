import { expect, type Locator, type Page } from '@playwright/test';
export class Loginpage {
    readonly page: Page;
    readonly loginLink: Locator;
    readonly loginLogin: Locator;
    readonly loginPassword: Locator;
    readonly loginSubmitBtn: Locator;


    constructor(page: Page) {
        this.page = page;
        this.loginLink = page.locator('#account>ul>li>a.login');
        this.loginLogin = page.locator('input#username');
        this.loginPassword = page.locator('#password');
        this.loginSubmitBtn = page.locator('#login-submit');
        }

        async goto() {
            await this.page.goto('https://www.redmine.org/');
          }
        
          async getLogin() {
            await this.loginLink.click();
          }

        async login(loginLogin: any, loginPassword: any) {
        await this.loginLogin.fill(loginLogin);
        await this.loginPassword.fill(loginPassword);
        await this.loginSubmitBtn.click();

    }
}
