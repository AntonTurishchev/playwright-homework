class StartPage {
    constructor (page) {
        this.page = page;
        this.usernameField = page.getByPlaceholder ('Username');
        this.passwordField = page.getByPlaceholder ('Password');
        this.loginButton = page.getByText ('Login');
    }

    async login(username='', password ='') {

        await this.usernameField.click();
        await this.usernameField.fill(username);
        await this.passwordField.click();
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}

export {StartPage};