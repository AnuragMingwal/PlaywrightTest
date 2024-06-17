import { expect, type Locator, type Page } from '@playwright/test';
 
export class Homepage {

    readonly page: Page;
    readonly buttonProduct: Locator;
    readonly buttonLight: Locator;
    readonly clickCart: Locator;
    constructor(page: Page){
        this.page= page;
        this.buttonProduct = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
        this.buttonLight = page.locator("//button[@id='add-to-cart-sauce-labs-bike-light']");
        this.clickCart = page.locator("//a[@class='shopping_cart_link']");


    }

    // this is for the product add
    async productAdd(){
     await this.buttonProduct.click();
     await this.buttonLight.click();
     await this.clickCart.click();
    }





}