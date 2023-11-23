import { UserBuilder } from "../../src/shared/helper/user.helper";

class CheckoutPage {
    constructor (page) {
        this.page = page;
        this.firstNameField = page.locator('xpath=//*[@id="first-name"]');
        this.lastNameField = page.locator('xpath =//*[@id="last-name"]');
        this.postalCodeField = page.locator('xpath=//*[@id="postal-code"]');
        this.continueButton = page.locator('xpath=//*[@id="continue"]');
        this.checkoutFinishButton = page.locator('//*[@id="finish"]');
    

    }

    async enterRandomCheckoutInfo () {
        const randomUser = new UserBuilder().setFirstName().setLastName().setPostalCode().build();
        await this.firstNameField.click();
        await this.firstNameField.fill(randomUser.firstName);
        await this.lastNameField.click();
        await this.lastNameField.fill(randomUser.lastName);
        await this.postalCodeField.click();
        await this.postalCodeField.fill(randomUser.postalCode);
        await this.continueButton.click();
    }

    async checkoutFinish () {
        await this.checkoutFinishButton.click();
    }

}

export {CheckoutPage};