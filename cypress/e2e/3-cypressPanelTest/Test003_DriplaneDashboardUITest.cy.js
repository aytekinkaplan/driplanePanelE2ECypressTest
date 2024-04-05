import LoginPage from "../../support/pages/login_specs";
import DashboardPage from "../../support/pages/dashboardpage";
import { loginprocess } from "../../support/pages/loginprocess";

describe('Login and Dashboard Functionality Tests', () => {
    let loginPage;
    let dashboardPage;

    before('Setup Objects for Tests', () => {
        // Suppressing uncaught exceptions
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
        });
    });

    it('should verify login and dashboard functionality', () => {
        // Initialize DashboardPage
        dashboardPage = new DashboardPage();

        // Perform a login process using provided credentials
        loginprocess("aoniki2018@gmail.com", "Aytekinkaplan1184811@", "projects");

        // Verify and click on the left corner button in the dashboard page
        dashboardPage.getLeftCornerButton().should('exist').click({ force: true });

        // Verify visibility of dashboard and settings buttons
        dashboardPage.getDashButton().should('be.visible');
        dashboardPage.getSettingsButton().should('be.visible');

        // Set viewport size to 1280x720
        cy.viewport(1280, 720);

        // Verify the visibility of script code area and check if email area contains '@'
        dashboardPage.getScriptCodeArea().should('be.visible');
        dashboardPage.getEmailArea().should('be.visible').then(() => {
            dashboardPage.getEmailArea().contains('@');
        });

        dashboardPage.getAccountSettings().should('be.visible');
        dashboardPage.getAccountSettings().click();

        // Additional comments:
        // You may add additional assertions or expectations
        // to validate specific functionalities or elements on the dashboard page.

        // Overall comment:
        // This test verifies the login process and checks various functionalities on the dashboard.
        // It ensures that the user can successfully log in and access the dashboard,
        // and validates the visibility of key elements on the dashboard page.
    });

});
