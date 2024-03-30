import LoginPage from "./pages/login_specs";
import DashboardPage from "./pages/dashboardpage";
import {loginprocess} from "./pages/loginprocess";

describe('Testing Login and Dashboard Functionality', () => {
    let loginPage;
    let dashboardPage;

    beforeEach('Set up objects for each test', () => {

        loginPage = new LoginPage();
        dashboardPage = new DashboardPage();
    });

    it('Should log in successfully and verify dashboard elements', () => {

        // Login actions
        loginprocess("aoniki2018@gmail.com", "Aytekinkaplan1184811@");

        cy.location('pathname').should('include', '/projects'); // Assert a specific path

        // Verify dashboard elements
        dashboardPage.getCornerButton().should('exist'); // Check existence
        cy.viewport(768, 1024);
        dashboardPage.getCornerButton().should('be.visible'); // Check visibility
        cy.viewport(1280, 720);
        dashboardPage.getDIDYOUADDTRACKERCODETOYOURWEBSITE().should('exist');
        dashboardPage.getNoData().should('exist');
        dashboardPage.getYOUCANADDTRACKERCODETOYOURWEBSITE().should('exist');
        dashboardPage.getDATADRIPLANETOKEN().should('exist');
        dashboardPage.getTHENYOUWILLSTARTTOSEEYOURVISITORINSIGHTSINTHISDASHBOARD().should('exist');
        dashboardPage.getLastMonth().should('exist');
        dashboardPage.getEmailArea().should('exist');


    });


});
