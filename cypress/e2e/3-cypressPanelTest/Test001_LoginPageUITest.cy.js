import LoginPage from "./pages/login_page.js"; // Assuming login_page.js is in a subdirectory called "pages"

describe('Login UI Page Test', () => {
    let loginPage; // Declare loginPage outside blocks

    before('Object Initialization', () => {
        loginPage = new LoginPage(); // Initialize once before all tests
    });

    beforeEach('Visit the Driplane Login Page ', () => {
        cy.visit("/login");
    });

    it.only('Visit the Driplane Dashboard Login Page', () => {
        loginPage.getEmailInput().type("aoniki2018@gmail.com");
        loginPage.getPasswordInput().type("Aytekinkaplan1184811@");
    });
});
