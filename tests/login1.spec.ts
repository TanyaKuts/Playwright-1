import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login.page';

test('unregistered login', async ({ page }) => {
  const loginPage = new Loginpage(page);

  await loginPage.goto();
  await loginPage.loginLink.click();
  await loginPage.login('gideon', '12345678');
  await expect(page.locator('#flash_error')).toHaveText('Invalid user or password');

})

test('sucessful login', async ({ page }) => {
    const loginPage = new Loginpage(page);
  
    await loginPage.goto();
    await loginPage.loginLink.click();
    await loginPage.login('gideon center', '12345678');
    //await expect(page.locator('#flash_error')).toHaveText('Invalid user or password');
  
  })