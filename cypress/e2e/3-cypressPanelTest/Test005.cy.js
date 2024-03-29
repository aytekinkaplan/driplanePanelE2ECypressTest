import LoginPage from "./pages/login_specs";
import DashboardPage from "./pages/dashboardpage";
describe('Sh', () => {
    let loginPage;
    let dashboardPage;
    it('Should log in successfully and navigate to the dashboard', () => {
        loginPage = new LoginPage();
        dashboardPage = new DashboardPage();
        cy.visit("/login");
        loginPage.getEmailInput().type('aoniki2018@gmail.com');
        loginPage.getPasswordInput().type('Aytekinkaplan1184811@');
        loginPage.getLoginButton().click();
        cy.get('.buttons-first-slot > .ios').should('exist');
        dashboardPage.getCornerButton().should('exist');



    });
    it('should ', () => {
        dashboardPage.getCornerButton().should('exist');
    });
});