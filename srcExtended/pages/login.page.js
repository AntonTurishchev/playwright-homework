class LoginPage {
    constructor (page) {
        this.page = page;
        this.usernameField = page.locator('xpath=//*[@id="user-name"]');
        this.passwordField = page.locator('xpath=//*[@id="password"]');
        this.loginButton = page.locator('xpath=//*[@id="login-button"]');
    }

    async doLogin(username = '', password =''){
        await this.usernameField.click();
        await this.usernameField.fill(username);
        await this.passwordField.click();
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}

export {LoginPage};