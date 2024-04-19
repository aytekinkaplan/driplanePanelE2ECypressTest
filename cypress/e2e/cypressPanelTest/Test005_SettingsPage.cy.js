/// <reference types="Cypress" />

// Importing necessary page objects
import SettingsPage from "../../support/pages/settingspage";
import LoginPage from "../../support/pages/login_specs";
import DashboardPage from "../../support/pages/dashboardpage";
import { loginprocess } from "../../support/pages/loginprocess";

// Test suite for navigating to the Settings page after successful login
describe('Settings Page Navigation After Login', () => {
    let settingsPage;
    let loginPage;
    let dashboardPage;

    // Before hook to handle uncaught exceptions
    before(() => {
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
        });
    });

    // Before each hook to initialize page objects
    beforeEach(() => {
        settingsPage = new SettingsPage();
        loginPage = new LoginPage();
        dashboardPage = new DashboardPage();
    });

    // Test case for logging in, navigating to dashboard, and opening Settings page
    it('Logs in successfully, navigates to dashboard, and opens Settings page', () => {
        // Setting viewport size for consistent UI testing
        cy.viewport(768, 1024);

        // Logging in with valid credentials
        loginprocess("aoniki2018@gmail.com", "Aytekinkaplan1184811@");

        // Clicking on the Settings button to open Settings page
        settingsPage.getSettingsButton().click({ force: true });

        // Verifying visibility of project name on Settings page
        settingsPage.getProjectNameDPS().should('be.visible');

        // Verifying visibility of project ID on Settings page
        settingsPage.getProjectID().should('be.visible');

        // Getting text of project ID and logging it
        settingsPage.getProjectID().invoke("text").then(text => {
            console.log(text);
        })

        // Verifying visibility of project client secret on Settings page
        settingsPage.getProjectClientSecret().should('be.visible');

        // Verifying visibility of project API keys on Settings page
        settingsPage.getProjectAPIKeys().should('be.visible');

        // Verifying visibility of 'Project Events' section on Settings page
        settingsPage.getProjectEvents().should('be.visible').and('have.text', 'Project Events');

        // Clicking on 'Create New Key' button on Settings page
        settingsPage.getCreateNewKey().should('be.visible').and('have.text', 'Create New Key').click({ force: true });

        // Verifying visibility of 'Create Project Key' on Settings page
        settingsPage.getCreateProjectKey().should('be.visible').and('have.text', 'Create Project Key');

        // Typing a key name in the key name area on Settings page
        settingsPage.getKeyNameArea().should('be.visible').type("<KEYNAME>");

        // Verifying visibility of instruction for giving a name to key on Settings page
        settingsPage.getGivingANameToKey().should('be.visible').and('have.text', 'Give your key a name that explains the purpose of this key. ex: Customer API Key');

        // Clicking on 'Write Access' text on Settings page
        settingsPage.getWriteText().should('be.visible').and('have.text', 'Write Access').click({ force: true });

        // Clicking on 'Read Access' text on Settings page
        settingsPage.getReadText().should('be.visible').and('have.text', 'Read Access').click({ force: true });

        // Verifying visibility of 'Auto Fill' text on Settings page
        settingsPage.getAutoFillText().should('be.visible').and('have.text', 'Auto Fill');

        // Clicking on 'Add autofill value' button on Settings page
        settingsPage.getAddAutoFillValue().should('be.visible').and('have.text', 'Add auto fill value').click({ force: true });

        // Clicking on 'Cancel' button on Settings page
        settingsPage.getCancelButton().should('be.visible').and('have.text', 'Cancel').click({ force: true });

        // Clicking on 'Add autofill value' button again on Settings page
        settingsPage.getAddAutoFillValue().should('be.visible').and('have.text', 'Add auto fill value').click({ force: true });

        // Clicking on 'Add New Auto Fill Value' on Settings page
        settingsPage.getAddNewAutoFillValue().should('be.visible').and('have.text', 'Add New Auto Fill Value').click({ force: true });

        // Verifying visibility of 'String value' and 'Numeric value' buttons on Settings page
        settingsPage.getStringValueAndNumericValueButtons().should('be.visible').and('have.text', 'String valueNumeric value');

        // Clearing key input area on Settings page
        settingsPage.getKeyInputArea().should('be.visible').and('have.text', '').clear();

        // Clicking on value input area on Settings page
        settingsPage.getValueInputArea().should('be.visible').and('have.text', '').click();

        // Verifying alert message for key inclusion validation on Settings page
        settingsPage.getKeyCanOnlyIncludeALERT().should('be.visible').and('have.text', 'Key can only include lowercase letters, numbers, dash and underscore');

        // Typing a value in the value input area on Settings page
        settingsPage.getVALUE().should('be.visible').and('have.text', '').type("<VALUE>");

        // Clearing capsulated value on Settings page
        settingsPage.getVALUECapsulated().should('be.visible').clear();

        // Verifying notification message to check the value on Settings page
        settingsPage.getPLEASECHECKVALUENotification().should('be.visible').and('have.text', 'Please check value');
    });
});
