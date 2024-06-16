import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login.page';
import { clear } from 'console';


//correct username and password 
test('Login Success', async ({ page }) => {
    const loginpage = new Loginpage(page);
    await loginpage.gotoUrl();
    await loginpage.login("standard_user","secret_sauce");
    expect(await page.locator("[text='Sauce Labs Backpack']")).toBeTruthy();

  });


  //incorrect username and password 
test('Wrong username', async ({ page }) => {
    const loginpage = new Loginpage(page);
    await loginpage.gotoUrl();
    await loginpage.login("standard_","secret_sauce");
    expect(await page.locator("[text='Sauce Labs Backpack']")).toBeTruthy();

  });

  