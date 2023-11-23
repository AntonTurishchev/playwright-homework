class InventoryPageElement {
    constructor (page) {
        this.page = page;
        this.menuButton = page.getByRole('button', {name: 'react-burger-menu-btn'});
        this.cartButton = page.locator('xpath=//*[@id="shopping_cart_container"]');;
        //todo добавить поле пагинации
        //this.pagination = 'none';
    }

    async gotoMenu() {
        await this.menuButton.click();
    }

    async gotoCart() {
        await this.cartButton.click();
    }
}

export {InventoryPageElement};