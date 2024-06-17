import { expect, type Locator, type Page } from '@playwright/test';
 
export class Checkoutpage {

    readonly page: Page;
    readonly buttonCheckout: Locator;
    readonly firstname: Locator;
    readonly lastname: Locator;
    readonly postalCode: Locator;
    readonly btnContinue: Locator;
    readonly finish: Locator;
    constructor(page: Page){
        this.page= page;
        this.buttonCheckout = page.locator("//button[@id='checkout']");
        this.firstname = page.locator("//input[@id='first-name']");
        this.lastname = page.locator("//input[@id='last-name']");
        this.postalCode = page.locator("//input[@id='postal-code']");
        this.btnContinue = page.locator("//input[@id='continue']");
        this.finish = page.locator("//button[@id='finish']");

    }
// this for check button click 
     async clickbuttonCheckout(){
        await this.buttonCheckout.click();
     }
 
// this for filling checkout Details  
      async useraddressFill(firstname: string , lastname: string, postalCode: any){
      await this.firstname.fill(firstname);
      await this.lastname.fill(lastname);
      await this.postalCode.fill(postalCode);
      await this.btnContinue.click();
      

      }
       
      // this for finish button click 
     async finishClick(){
        await this.finish.click();
     }

}