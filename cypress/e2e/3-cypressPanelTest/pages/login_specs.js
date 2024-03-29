class LoginPage {
    constructor() {}

    getDriplaneText() {
        // Consider adding assertion: .should('be.visible').contains('Driplane');
        return cy.get('h1').contains('Driplane'); // Optional: return for chaining
    }

    getEmailInput() {
        return cy.get('[data-testid="usernameInput"] > .input-wrapper > .native-wrapper');
    }

    getPasswordInput() {
        return cy.get('[data-testid="passwordInput"] > .input-wrapper > .native-wrapper');
    }

    getLoginButton() {
        return cy.get("ion-button:contains('Login')"); // Optional: return for chaining
    }

    getResetButton() {
        return cy.get('[data-testid="resetPasswordButton"]');
    }

    getCreateAccountButton() {
        return cy.get('[data-testid="signupButton"]');
    }
}

export default LoginPage;
