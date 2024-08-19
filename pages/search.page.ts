import { expect, type Locator, type Page } from '@playwright/test';
export class Searchpage {
    readonly page: Page;
    readonly searchFieldText: Locator;
    readonly selectProject: Locator;
    readonly projectSearchField: Locator;
    readonly enterSearch: Locator;
  

    constructor(page: Page) {
        this.page = page;
        this.searchFieldText = page.locator('#q');
        this.enterSearch = page.locator('#q');
        }
       // this.selectProject = page.locator('#project-jump');
       // this.projectSearchField = page.locator('#projects-quick-search');
      

        async goto() {
          await this.page.goto('https://www.redmine.org/');
          }

        async pressEnter() {
          await this.enterSearch.press('Enter');
        }
      }
        
       /*   async searchText() {
            await this.searchFieldText.click();
          }

        async search(searchFieldText: any, projectSearchField: any) {
        await this.searchFieldText.fill(searchFieldText);
        // await page.keyboard.press('Enter');
       // await this.selectProject.click();
       // await this.projectSearchField.fill(projectSearchField);
        

    } */
      
