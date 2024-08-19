import { test, expect } from '@playwright/test';
import { Searchpage } from '../pages/search.page';

test('project search', async ({ page }) => {
  const searchPage = new Searchpage(page);

  await searchPage.goto();
  await searchPage.searchFieldText.fill('Github');
  await searchPage.enterSearch.press('Enter');
 // await searchPage.selectProject.click();
 // await searchPage.projectSearchField.fill('project');
 // await expect(page.locator('#flash_error')).toHaveText('Invalid user or password');

})


/*search #q

#project-jump

#projects-quick-search  */