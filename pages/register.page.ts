import { expect, type Locator, type Page } from '@playwright/test';
export class Registerpage {
    readonly page: Page;
    readonly registerLink: Locator;
    readonly registerLogin: Locator;
    readonly registerPassword: Locator;
    readonly registerPasswordConfirmation: Locator;
    readonly registerFirstName: Locator;
    readonly registerLastName: Locator;
    readonly registerUserEmail: Locator;
    readonly registerSubmitBtn: Locator;


    constructor(page: Page) {
        this.page = page;
        this.registerLink = page.locator('#account>ul>li>a.register');
        this.registerLogin = page.locator('#user_login');
        this.registerPassword = page.locator('#user_password');
        this.registerPasswordConfirmation = page.locator('#user_password_confirmation');
        this.registerFirstName = page.locator('#user_firstname');
        this.registerLastName = page.locator('#user_lastname');
        this.registerUserEmail = page.locator('#user_mail');
        this.registerSubmitBtn = page.locator('#new_user>input[name="commit"]');
        }

        async goto() {
            await this.page.goto('https://www.redmine.org/');
          }
        
          async getStarted() {
            await this.registerLink.click();
          }

    

    async register(registerLogin: any, registerPassword: any, registerPasswordConfirmation: any, registerFirstName: string, registerLastName: string, registerUserEmail: string) {
        await this.registerLogin.fill(registerLogin);
        await this.registerPassword.fill(registerPassword);
        await this.registerPasswordConfirmation.fill(registerPasswordConfirmation);
        await this.registerFirstName.fill(registerFirstName);
        await this.registerLastName.fill(registerLastName);
        await this.registerUserEmail.fill(registerUserEmail);
        await this.registerSubmitBtn.click();

    }
}
