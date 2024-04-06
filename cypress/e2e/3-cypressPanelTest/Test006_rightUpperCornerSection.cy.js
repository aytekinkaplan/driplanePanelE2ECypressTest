/// <reference types="Cypress" />
// Import statements
import SettingsPage from "../../support/pages/settingspage";
import LoginPage from "../../support/pages/login_specs";
import DashboardPage from "../../support/pages/dashboardpage";
import {RightUpperCornerSection} from "../../support/pages/rightuppercornersection";
import {loginprocess} from "../../support/pages/loginprocess"; // Corrected import statement

// Test case
describe('Test Case Description', () => {
    let settingsPage;
    let loginPage;
    let dashboardPage;
    let rightUpperCornerSection;

    before('Set up objects for each test', () => {
        settingsPage = new SettingsPage();
        loginPage = new LoginPage();
        dashboardPage = new DashboardPage();
        rightUpperCornerSection = new RightUpperCornerSection();
        cy.on("uncaught:exception", (err, runnable) => {
            return false
        });
    });

    it('Test Description', () => {
        cy.viewport(768, 1024);
        loginprocess("aoniki2018@gmail.com", "Aytekinkaplan1184811@", "projects");
        rightUpperCornerSection.getUpperRightCornerButton().click();
    })
});
