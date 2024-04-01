import LoginPage from "../e2e/3-cypressPanelTest/pages/login_specs";

export default class CustomCommandsLogin {
    constructor() {
        this.loginPage = new LoginPage();
    }

    static visitingPages() {
        return cy.visit("/login");
    }

    static userEmail() {
        const customCommandsLogin = new CustomCommandsLogin();
        return customCommandsLogin.loginPage.getEmailInput();
    }

    static userPassword() {
        const customCommandsLogin = new CustomCommandsLogin();
        return customCommandsLogin.loginPage.getPasswordInput();
    }

    static loginButton() {
        const customCommandsLogin = new CustomCommandsLogin();
        return customCommandsLogin.loginPage.getLoginButton();
    }
}
