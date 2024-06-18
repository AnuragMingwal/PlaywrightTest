import { test, expect, Page } from '@playwright/test';
import { Loginpage } from '../pages/login.page';
import { Homepage } from '../pages/home.page';
import { Checkoutpage } from '../pages/checkout.page';

import { clear } from 'console';


// test.describe('Add a simple invoice test', () => {
//     let page: Page;
//     test.beforeAll(async ({ browser }) => {
//       page = await browser.newPage();
//     });


//correct username and password 
test('Login Success', async ({ page }) => {
    const loginpage = new Loginpage(page);
    await loginpage.gotoUrl();
    await loginpage.login("standard_user","secret_sauce");
    expect(await page.locator("[text='Sauce Labs Backpack']")).toBeTruthy();

    
    // Home page 
    const homepage = new Homepage(page);
    await homepage.productAdd();
    

    // checkout 
    const checkoutpage = new Checkoutpage(page);
    await checkoutpage.clickbuttonCheckout();
    await checkoutpage.useraddressFill("Anurag", "Mingwal", "110085");
    await checkoutpage.finishClick();


  });


  //incorrect username and password 
// test('Wrong username', async ({ page }) => {
//     const loginpage = new Loginpage(page);
//     await loginpage.gotoUrl();
//     await loginpage.login("standard_","secret_sauce");
//     expect(await page.locator("[text='Sauce Labs Backpack']")).toBeTruthy();

//   });

// this is for home inventory 
// test('Home inventory', async ({ page }) => {
//     const homepage = new Homepage(page);

//     await homepage.productAdd();
    

//   });
/// this is for check out
//   test('Checkout Delivery', async ({ page }) => {
//     const checkoutpage = new Checkoutpage(page);
//     await checkoutpage.clickbuttonCheckout();
//     await checkoutpage.useraddressFill("Anurag", "Mingwal", 110085);
//     await checkoutpage.finishClick();



//   });

//});