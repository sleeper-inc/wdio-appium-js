const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get fieldUsername() {
        return $('~test-Username');
    }

    get fieldPassword() {
        return $('~test-Password');
    }

    get btnLogin() {
        return $('~test-LOGIN');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(password);
        await this.btnLogin.click();
    }
}

module.exports = new LoginPage();
