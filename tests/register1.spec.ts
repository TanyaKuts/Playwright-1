import { test, expect } from '@playwright/test';
import { Registerpage } from '../pages/register.page';

test('successful register', async ({ page }) => {
  const registerPage = new Registerpage(page);

  await registerPage.goto();
  await registerPage.registerLink.click();
  await registerPage.register('gideon center', '12345678', '12345678', 'First', 'Last', 'gideoncenter@gmail.com');
  //await expect(page.locator('#errorExplanation')).toHaveText('Login is invalid', 'Password doesn't match confirmation');
})

test('invalid password confirmation register', async ({ page }) => {
  const registerPage = new Registerpage(page);

  await registerPage.goto();
  await registerPage.registerLink.click();
  await registerPage.register('gideon', '12345678', '12345679', 'First', 'Last', 'gideoncenter1@gmail.com');
  //await expect(page.locator('#errorExplanation')).toHaveText('Login is invalid', 'Password doesn't match confirmation');
})

test('invalid password register', async ({ page }) => {
  const registerPage = new Registerpage(page);

  await registerPage.goto();
  await registerPage.registerLink.click();
  await registerPage.register('gideon', '1234567', '1234567', 'First', 'Last', 'gideoncenter1@gmail.com');
  await expect(page.locator('#errorExplanation')).toHaveText('Password is too short (minimum is 8 characters)');

  /* register click
  await page.locator('#account>ul>li>a.register').click();

  // filling in the registration form
  //await page.locator('#user_login').fill('gideon center');
  await page.locator('#user_password').fill('12345678');
  await page.locator('#user_password_confirmation').fill('12345678');
  await page.locator('#user_firstname').fill('First');
  await page.locator('#user_lastname').fill('Last');
  await page.locator('#user_mail').fill('gideoncenter@gmail.com');

  // submit
  await page.locator('#new_user>input[name="commit"]').click();
  await expect(page.locator('#errorExplanation')).toHaveText('Login cannot be blank');
*/

})