import { expect } from '@playwright/test';
import { App } from '../srcExtended/pages/app.page';
import { test } from '../srcExtended/fixture/all.fixture';
import { allure } from 'allure-playwright';

let app;
test.describe ('Разлогины', () =>{
    test.beforeEach(async ({ loginFixture }) => {
    await expect (loginFixture.page).toHaveURL(/.*inventory/);
    });

    test ('Пользоатель разлогинивается по кнопке', async ({ page}) => {
        await allure.epic('Модуль авторизации и аутентификации');
        await allure.story('Ручной разлогин из меню');
        await allure.issue('Как остлеживать не только ui, но и куки?', 'https://www.youtube.com/watch?v=WR0Uh3-AVNA');
        app = new App (page);
        await app.inventoryPage.doLogout();
        await expect(page).toHaveURL('https://www.saucedemo.com/');
    });
});