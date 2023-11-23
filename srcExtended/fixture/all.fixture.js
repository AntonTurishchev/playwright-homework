import {test as base, expect} from '@playwright/test';
import { App } from '../pages/app.page';
import { InventoryPageElement, LoginPageElement } from '../element/element.index';

export const test = base.extend({
    loginFixture: async ({page}, use) => {
        //settings of fixture
        const app = new App(page);
        const username = 'standard_user';
        const password = 'secret_sauce';
        await page.goto('https://www.saucedemo.com/');
        await app.loginPage.doLogin(username, password);

        //use fixture
        await use(app);
    },
/*
    cartFixture: async ({page}, use) => {
        //settings of fixture
        const app = new App(page);
        const username = 'standard_user';
        const password = 'secret_sauce';
        await page.goto('https://www.saucedemo.com/');
        await app.loginPage.doLogin(username, password);
        await 
    }
    */
});

export {expect} from '@playwright/test';

