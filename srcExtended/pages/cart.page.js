class CartPage {
    constructor (page) {
        this.page = page;
        this.checkoutButton = page.getByText('Checkout');
    }

    async doCheckout () {
        await this.checkoutButton.click();
    }
}

export {CartPage};