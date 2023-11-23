class LoginPageElement {
    constructor (page) {
        this.page = page;
        this.usernameField = page.getByPlaceholder ('Username');
        this.passwordField = page.getByPlaceholder ('Password');
        this.loginButton = page.getByText ('Login');
    }

    async gotoUsernameInput() {
        await this.usernameField.click();
    }

    async gotoPasswordInput() {
        await this.passwordField.click();
    }

    async pushLoginButton() {
        await this.loginButton.click();
    }
}

export {LoginPageElement};