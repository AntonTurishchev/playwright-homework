import { expect } from '@playwright/test';
import { App } from '../srcExtended/pages/app.page';
import { test } from '../srcExtended/fixture/all.fixture';
import { allure } from 'allure-playwright';

let app;
test.describe ('Тесты с использвоанием фикстур', () =>{
    test.beforeEach(async ({page}) => {
        app = new App(page);
    });

    test ('Аутентификация через фикстуру', async ({ loginFixture }) => {
        await allure.epic('Модуль авторизации и аутентификации');
        await allure.story('Успешная аутентификация');
        await expect (loginFixture.page).toHaveURL(/.*inventory/);
        await allure.issue('Применить фикстуры в более объемных тестах', 'https://www.youtube.com/watch?v=azqfPlliWqU');
    });
});