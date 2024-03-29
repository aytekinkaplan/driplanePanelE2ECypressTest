import LoginPage from "./pages/login_specs";

describe('Login UI Page Test', () => {
    let loginPage;

    beforeEach(() => {
        loginPage = new LoginPage();
        cy.visit('/login');
    });

    it('should successfully login with valid credentials', () => {
        loginPage.getEmailInput().type('aoniki2018@gmail.com');
        loginPage.getPasswordInput().type('Aytekinkaplan1184811@');
        loginPage.getLoginButton().click();

        // ... assertions for successful login ...
    });

    it('should show error message for invalid email', () => {
        loginPage.getEmailInput().type('invalidemailaddress');
        loginPage.getPasswordInput().type('Password123!');
        loginPage.getLoginButton().click();

        // ... assertions for error message ...
    });

    it('should show error for invalid email format', () => {
        const invalidEmails = ['username@', 'example.com', 'johndoe@.com'];

        for (const email of invalidEmails) {
            loginPage.getEmailInput().type(email);
            loginPage.getPasswordInput().type('Password123!');
            loginPage.getLoginButton().click();

            // ... assertions for error message ...
        }
    });
    it('should show error for password shorter than 8 characters', () => {
        loginPage.getEmailInput().type('johndoe@example.com');
        loginPage.getPasswordInput().type('short');
        loginPage.getLoginButton().click();

        // ... assertions for error message ...
    });
    it('should show error for empty email and password', () => {
        loginPage.getEmailInput().clear();
        loginPage.getPasswordInput().clear();
        loginPage.getLoginButton().click();

        // ... assertions for error message ...
    });

    it('should show error for empty email only', () => {
        loginPage.getEmailInput().clear();
        loginPage.getPasswordInput().type('Password123!');
        loginPage.getLoginButton().click();

        // ... assertions for error message ...
    });

    it('should show error for empty password only', () => {
        loginPage.getEmailInput().type('johndoe@example.com');
        loginPage.getPasswordInput().clear();
        loginPage.getLoginButton().click();

        // ... assertions for error message ...
    });
    it('should be case-sensitive for email and password', () => {
        loginPage.getEmailInput().type('johndoe@example.com');
        loginPage.getPasswordInput().type('password123!');
        loginPage.getLoginButton().click();

        // ... assertions for unsuccessful login ...

        loginPage.getEmailInput().clear().type('JOHNdoe@example.com');
        loginPage.getPasswordInput().clear().type('PASSWORD123!');
        loginPage.getLoginButton().click();

        // ... assertions for unsuccessful login ...
    });


});
