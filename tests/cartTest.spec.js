import { expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import { test } from '../srcExtended/fixture/all.fixture';
import { App } from '../srcExtended/pages/app.page';

let app;
test.beforeEach(async ({ loginFixture }) => {
    await expect (loginFixture.page).toHaveURL(/.*inventory/);
});

test.describe('Тесты корзины товаров', () => {
   
    test('Покупка товара из корзины', async ({ page }) => {
        await allure.epic('Модуль продаж');
        await allure.issue('Разбить на атомарные тесты', 'https://www.youtube.com/watch?v=JFNUEJCH__Q');
        app = new App (page);
        await app.inventoryPage.addFirstProductOnPageAtCart();
        await app.inventoryPage.gotoCart();
        await app.cartPage.doCheckout();
        await app.checkoutPage.enterRandomCheckoutInfo();
        await app.checkoutPage.checkoutFinish();
        await expect (page).toHaveURL(/.*checkout-complete/);
    });
});