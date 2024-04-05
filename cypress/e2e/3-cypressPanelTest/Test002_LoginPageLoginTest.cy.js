import LoginPage from "../../pages/login_specs";

describe('Login Tests with Fixture Data', () => {
    let loginPage;

    beforeEach(() => {
        loginPage = new LoginPage();
        cy.visit('/login');
    });

    it('should perform login with valid credentials', () => {
        cy.fixture("userLoginTest.json").then((userData) => {
            cy.log(userData.validCredentials.description);
            const { email, password } = userData.validCredentials;
            loginPage.getEmailInput().type(email);
            loginPage.getPasswordInput().type(password);
            loginPage.getLoginButton().click();
            // Assertions for successful login should be added here
        });
    });

    it('should handle invalid email format', () => {
        cy.fixture("userLoginTest.json").then((userData) => {
            cy.log(userData.invalidEmail.description);
            const { email, password } = userData.invalidEmail;
            loginPage.getEmailInput().type(email);
            loginPage.getPasswordInput().type(password);
            loginPage.getLoginButton().click();
            // Assertions for error message related to invalid email format should be added here
        });
    });

    it('should handle short password', () => {
        cy.fixture("userLoginTest.json").then((userData) => {
            cy.log(userData.shortPassword.description);
            const { email, password } = userData.shortPassword;
            loginPage.getEmailInput().type(email);
            loginPage.getPasswordInput().type(password);
            loginPage.getLoginButton().click();
            // Assertions for an error message related to short password should be added here
        });
    });

    it('should handle empty email and password fields', () => {
        cy.fixture("userLoginTest.json").then((userData) => {
            cy.log(userData.emptyFields.description);
            const { email, password } = userData.emptyFields;
            loginPage.getEmailInput().type(email);
            loginPage.getPasswordInput().type(password);
            loginPage.getLoginButton().click();
            // Assertions for error messages related to both empty email and password fields should be added here
        });
    });

    it('should handle empty email field', () => {
        cy.fixture("userLoginTest.json").then((userData) => {
            cy.log(userData.emptyEmail.description);
            const { email, password } = userData.emptyEmail;
            loginPage.getEmailInput().type(email);
            loginPage.getPasswordInput().type(password);
            loginPage.getLoginButton().click();
            // Assertions for an error message related to empty email field should be added here
        });
    });

    it('should handle empty password field', () => {
        cy.fixture("userLoginTest.json").then((userData) => {
            cy.log(userData.emptyPassword.description);
            const { email, password } = userData.emptyPassword;
            loginPage.getEmailInput().type(email);
            loginPage.getPasswordInput().type(password);
            loginPage.getLoginButton().click();
            // Assertions for an error message related to empty password field should be added here
        });
    });

    it('should handle case-sensitive email and password', () => {
        cy.fixture("userLoginTest.json").then((userData) => {
            cy.log(userData.caseSensitive[0].description);
            const { email, password } = userData.caseSensitive[0];
            loginPage.getEmailInput().type(email);
            loginPage.getPasswordInput().type(password);
            loginPage.getLoginButton().click();
            // Assertions for error message related to case-sensitive email and password should be added here
        });

        cy.fixture("userLoginTest.json").then((userData) => {
            cy.log(userData.caseSensitive[1].description);
            const { email, password } = userData.caseSensitive[1];
            loginPage.getEmailInput().type(email);
            loginPage.getPasswordInput().type(password);
            loginPage.getLoginButton().click();
            // Assertions for error message related to case-sensitive email and password should be added here
        });
    });

    it('should handle valid email but invalid password', () => {
        cy.fixture("userLoginTest.json").then((userData) => {
            cy.log(userData.validEmailInvalidPassword.description);
            const { email, password } = userData.validEmailInvalidPassword;
            loginPage.getEmailInput().type(email);
            loginPage.getPasswordInput().type(password);
            loginPage.getLoginButton().click();
            // Assertions for an error message related to invalid password should be added here
        });
    });

    it('should handle invalid email but valid password', () => {
        cy.fixture("userLoginTest.json").then((userData) => {
            cy.log(userData.invalidEmailValidPassword.description);
            const { email, password } = userData.invalidEmailValidPassword;
            loginPage.getEmailInput().type(email);
            loginPage.getPasswordInput().type(password);
            loginPage.getLoginButton().click();
            // Assertions for an error message related to invalid email should be added here
        });
    });

    it('should handle long password', () => {
        cy.fixture("userLoginTest.json").then((userData) => {
            cy.log(userData.longPassword.description);
            const { email, password } = userData.longPassword;
            loginPage.getEmailInput().type(email);
            loginPage.getPasswordInput().type(password);
            loginPage.getLoginButton().click();
            // Assertions for successful login should be added here
        });
    });

    it('should handle special characters in password', () => {
        cy.fixture("userLoginTest.json").then((userData) => {
            cy.log(userData.specialCharactersInPassword.description);
            const { email, password } = userData.specialCharactersInPassword;
            loginPage.getEmailInput().type(email);
            loginPage.getPasswordInput().type(password);
            loginPage.getLoginButton().click();
            // Assertions for successful login should be added here
        });
    });

    it('should handle mixed case email and password', () => {
        cy.fixture("userLoginTest.json").then((userData) => {
            cy.log(userData.mixedCaseEmailAndPassword.description);
            const { email, password } = userData.mixedCaseEmailAndPassword;
            loginPage.getEmailInput().type(email);
            loginPage.getPasswordInput().type(password);
            loginPage.getLoginButton().click();
            // Assertions for successful login should be added here
        });
    });

    it('should handle whitespace in email and password', () => {
        cy.fixture("userLoginTest.json").then((userData) => {
            cy.log(userData.whitespaceInEmailAndPassword.description);
            const { email, password } = userData.whitespaceInEmailAndPassword;
            loginPage.getEmailInput().type(email);
            loginPage.getPasswordInput().type(password);
            loginPage.getLoginButton().click();
            // Assertions for successful login should be added here
        });
    });

    it('should handle valid email but empty password', () => {
        cy.fixture("userLoginTest.json").then((userData) => {
            cy.log(userData.validEmailEmptyPassword.description);
            const { email, password } = userData.validEmailEmptyPassword;
            loginPage.getEmailInput().type(email);
            loginPage.getPasswordInput().type(password);
            loginPage.getLoginButton().click();
            // Assertions for an error message related to empty password should be added here
        });
    });

    it('should handle empty email but valid password', () => {
        cy.fixture("userLoginTest.json").then((userData) => {
            cy.log(userData.emptyEmailValidPassword.description);
            const { email, password } = userData.emptyEmailValidPassword;
            loginPage.getEmailInput().type(email);
            loginPage.getPasswordInput().type(password);
            loginPage.getLoginButton().click();
            // Assertions for an error message related to empty email should be added here
        });
    });
});
