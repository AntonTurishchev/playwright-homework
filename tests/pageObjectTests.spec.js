import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import { StartPage } from '../src/pages/index';

test.describe('Тесты с использованием паттерна PageObject', () => {
    test('Аутентификаци c применением PageObject', async ({ page }) => {
        await allure.epic('Модуль авторизации и аутентификации')
        await allure.story('Успешная аутентификация')
        const login = 'standard_user';
        const loginPassword = 'secret_sauce'
        const startPage = new StartPage(page); 
        const user = 'standard_user';
        await page.goto ('https://www.saucedemo.com/');
        await startPage.login (login, loginPassword);
        await expect(page.getByText('Products')).toBeVisible();
    });

    test ('Попытка аутентификация с некорректным паролем', async ({page}) => {
        await allure.epic('Модуль авторизации и аутентификации')
        await allure.story('Некорректные аутентификации')
        await allure.issue('Переименовать папки и сделать более логичную структуру', 'https://www.youtube.com/watch?v=HOWEUkgC-Dk');
        const login = 'standard_user';
        const loginPassword = 'secret_sauce1'
        const startPage = new StartPage(page); 
        const user = 'standard_user';
        await page.goto ('https://www.saucedemo.com/');
        await startPage.login (login, loginPassword);
        await expect(page.locator('xpath=//*[@id="login_button_container"]/div/form/div[3]/h3')).toBeVisible();
    })
});
