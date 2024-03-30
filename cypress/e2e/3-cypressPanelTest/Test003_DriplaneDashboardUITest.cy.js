import LoginPage from "./pages/login_specs";
import DashboardPage from "./pages/dashboardpage";
import {loginprocess} from "./pages/loginprocess";

describe('Testing Login and Dashboard Functionality', () => {
    let loginPage;
    let dashboardPage;

    before('Set up objects for each test', () => {
        cy.viewport(1280, 720);
        loginPage = new LoginPage();
        dashboardPage = new DashboardPage();
    });

    it.only('Should log in successfully and navigate to the dashboard', () => {
        loginprocess("aoniki2018@gmail.com", "Aytekinkaplan1184811@");

        dashboardPage.getNoData().contains("No Data");


    });

    // Test case for Corner Button existence and visibility
    it.only('Should verify Corner Button existence and visibility', () => {
        //dashboardPage.getCornerButton().find("buttons-first-slot > .ios").should('exist');
        cy.get("ios button in-toolbar ion-activatable ion-focusable hydrated").children(".buttons-first-slot > .ios").should('exist');
    });

    // Test case for "DID YOU ADD TRACKER CODE TO YOUR WEBSITE?" title existence
    it('Should verify "DID YOU ADD TRACKER CODE TO YOUR WEBSITE?" title exists', () => {
        dashboardPage.getDIDYOUADDTRACKERCODETOYOURWEBSITE().should('exist');
    });

    // ... Add similar test cases for other elements (improve selectors if possible)

    // Test case for "No Data" title existence (improve selector if possible)
    it('Should verify "No Data" title exists', () => {
        dashboardPage.getNoData().should('exist');
    });

    // Test case for "YOU CAN ADD TRACKER CODE TO YOUR WEBSITE" text existence
    it('Should verify "YOU CAN ADD TRACKER CODE TO YOUR WEBSITE" text exists', () => {
        dashboardPage.getYOUCANADDTRACKERCODETOYOURWEBSITE().should('exist');
    });

    // Test case for Data Driplane Token element existence (improve selector if possible)
    it('Should verify Data Driplane Token element exists', () => {
        dashboardPage.getDATADRIPLANETOKEN().should('exist');
    });

    // Test case for "THEN YOU WILL START TO SEE YOUR VISITOR INSIGHTS IN THIS DASHBOARD" text existence
    it('Should verify "THEN YOU WILL START TO SEE YOUR VISITOR INSIGHTS IN THIS DASHBOARD" text exists', () => {
        dashboardPage.getTHENYOUWILLSTARTTOSEEYOURVISITORINSIGHTSINTHISDASHBOARD().should('exist');
    });

    // Test case for "Last Month" element existence (improve selector if possible)
    it('Should verify "Last Month" element exists', () => {
        dashboardPage.getLastMonth().should('exist');
    });
});

