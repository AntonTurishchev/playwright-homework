import { LoginPage, InventoryPage, CheckoutPage, CartPage } from "./pages.index.js";


class App {
    constructor (page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.inventoryPage = new InventoryPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.cartPage = new CartPage(page);
    }
}

export {App};