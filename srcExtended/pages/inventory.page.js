class InventoryPage {
    constructor(page) {
        this.page = page;
        this.firstProductAddAtCartButton = this.page.locator('xpath=//*[@id="add-to-cart-sauce-labs-backpack"]');
        this.cartButton = this.page.locator('xpath=//*[@id="shopping_cart_container"]');
        this.menuButton = this.page.locator('xpath=//*[@id="react-burger-menu-btn"]');
        this.logoutButton = this.page.locator('xpath=//*[@id="logout_sidebar_link"]');
    }

    async addFirstProductOnPageAtCart () {
        await  this.firstProductAddAtCartButton.click();
    }

    async gotoCart () {
        await this.cartButton.click();
        await this.page.reload({ waitUntil: 'domcontentloaded' });
        //todo Сделать локальную проверку, что перешли на страницу корзины
        //await expect (this.page).toHaveURL(/.*cart/);
    }

    async doLogout() {
        await this.menuButton.click();
        await this.logoutButton.click();
    }
}

export {InventoryPage};