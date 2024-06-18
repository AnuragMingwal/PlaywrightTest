import { expect, type Locator, type Page } from '@playwright/test';
export class Loginpage{

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly submit: Locator;
    constructor(page: Page){
        this.page= page;
        this.username = page.locator("//input[@id='user-name']");
        this.password = page.locator("//input[@id='password']");
        this.submit = page.locator("//input[@id='login-button']");


    }
    async gotoUrl(){
        await this.page.goto('/');

        
    }

    /** this is for  only for login purpose 
     * 
     * @param username 
     * @param password 
     */
    async login(username: string, password: any ){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.submit.click();

    }
}   