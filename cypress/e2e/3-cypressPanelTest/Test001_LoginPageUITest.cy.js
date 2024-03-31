import LoginPage from "./pages/login_specs"; // Corrected path

describe('Login UI Page Test', () => {
    let loginPage;

    beforeEach(() => { // Combined initialization and navigation
        loginPage = new LoginPage();
        cy.visit("/login");
    });

    it('Driplane Login Page UI URL includes /login', () => {
        cy.url().should('include', '/login');
    });

    it('Login Page displays expected elements', () => {
        loginPage.getDriplaneText().should('be.visible').and('contain', 'Driplane');
        loginPage.getEmailInput().should('be.visible');
        loginPage.getPasswordInput().should('be.visible');
        loginPage.getLoginButton().should('be.visible');
        loginPage.getResetButton().should('be.visible');
        loginPage.getCreateAccountButton().should('be.visible');
        loginPage.getForgotPasswordButton().should('be.visible');
    });
});
