import LoginPage from "./pages/login_specs";
import DashboardPage from "./pages/dashboardpage";
import {loginprocess} from "./pages/loginprocess";

describe('Testing Login and Dashboard Functionality', () => {
    let loginPage;
    let dashboardPage;

    before('Set up objects for each test', () => {
        cy.on("uncaught:exception", (err, runnable) => {
            return false
        });
    });

    it('should ', () => {
        dashboardPage = new DashboardPage();

        loginprocess("aoniki2018@gmail.com", "Aytekinkaplan1184811@", "projects");

        dashboardPage.getLeftCornerButton().should('exist').click({force: true});
        dashboardPage.getLeftCornerButton().click({force: true});

        dashboardPage.getDashButton().should('be.visible');
        dashboardPage.getSettingsButton().should('be.visible');

        cy.viewport(1280, 720);
        dashboardPage.getScriptCodeArea().should('be.visible');

        dashboardPage.getEmailArea().should('be.visible').then(() => {
            dashboardPage.getEmailArea().contains('@');
        });


    });
});
