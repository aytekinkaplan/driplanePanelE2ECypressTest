import LoginPage from "./pages/login_specs.js"; // Assuming login_page.js is in a subdirectory called "pages"
describe('Login UI Page Test', () => {
    let loginPage; // Declare loginPage outside blocks

    before('Object Initialization', () => {
        loginPage = new LoginPage(); // Initialize once before all tests
    });

    beforeEach('Visit the Driplane Login Page ', () => {
        cy.visit("/login");
    });
    it('Driplane Login Page UI URL includes /login', () => {
        cy.url().should('include', '/login');
    });
    it('Driplane Text is visible', () => {
        loginPage.getDriplaneText().should('be.visible').contains('Driplane');
    });
    it('Should have email and password input elements with visible', () => {
        loginPage.getEmailInput().should('be.visible');
        loginPage.getPasswordInput().should('be.visible');
    });

    it('Should have email and password input elements with exist', () => {
        loginPage.getEmailInput().should('exist');
        loginPage.getPasswordInput().should('exist');
    });

    it('Should have Login button with visible', () => {
        loginPage.getLoginButton().should('be.visible');
    })
    it('Should have Login button with exist', () => {
        loginPage.getLoginButton().should('exist');
    })
    it('Should display the reset button ', () => {
        loginPage.getResetButton().should('be.visible');
    });
    it('Should exist the reset button ', () => {
        loginPage.getResetButton().should('exist');
    });
    it('Should display the create account button ', () => {
        loginPage.getCreateAccountButton().should('be.visible');
    })
    it('Should exist the create account button ', () => {
        loginPage.getCreateAccountButton().should('exist');
    });

    it('Should display the forgot password button ', () => {
        loginPage.getForgotPasswordButton().should('be.visible');
    });
    it('Should exist the forgot password button ', () => {
        loginPage.getForgotPasswordButton().should('exist');
    });
});
