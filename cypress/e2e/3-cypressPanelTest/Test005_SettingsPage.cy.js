/// <reference types="Cypress" />
import SettingsPage from "../../support/pages/settingspage";
import LoginPage from "../../support/pages/login_specs";
import DashboardPage from "../../support/pages/dashboardpage";
import {loginprocess} from "../../support/pages/loginprocess";

describe('Settings Page Navigation After Login', () => {
    let settingsPage;
    let loginPage;
    let dashboardPage;

    before(() => {
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
        });
    });

    beforeEach(() => {
        settingsPage = new SettingsPage();
        loginPage = new LoginPage();
        dashboardPage = new DashboardPage();
    });

    it('Logs in successfully, navigates to dashboard, and opens Settings page', () => {
        cy.viewport(768, 1024);

        loginprocess("aoniki2018@gmail.com", "Aytekinkaplan1184811@");

        settingsPage.getSettingsButton().click({force: true});

        settingsPage.getProjectNameDPS().should('be.visible');

        settingsPage.getProjectID().should('be.visible');

        settingsPage.getProjectID().invoke("text").then(text => {
            console.log(text);
        })


        settingsPage.getProjectClientSecret().should('be.visible');


        settingsPage.getProjectAPIKeys().should('be.visible');

        settingsPage.getProjectEvents().should('be.visible').and('have.text', 'Project Events');

        settingsPage.getCreateNewKey().should('be.visible').and('have.text', 'Create New Key').click({force: true});

        settingsPage.getCreateProjectKey().should('be.visible').and('have.text', 'Create Project Key');

        settingsPage.getKeyNameArea().should('be.visible').type("<KEYNAME>");

        settingsPage.getGivingANameToKey().should('be.visible').and('have.text', 'Give your key a name that explains the purpose of this key. ex: Customer API Key');

        settingsPage.getWriteText().should('be.visible').and('have.text', 'Write Access').click({force: true});

        settingsPage.getReadText().should('be.visible').and('have.text', 'Read Access').click({force: true});

        settingsPage.getAutoFillText().should('be.visible').and('have.text', 'Auto Fill');

        settingsPage.getAddAutoFillValue().should('be.visible').and('have.text', 'Add auto fill value').click({force: true});

        settingsPage.getCancelButton().should('be.visible').and('have.text', 'Cancel').click({force: true});

        settingsPage.getAddAutoFillValue().should('be.visible').and('have.text', 'Add auto fill value').click({force: true});

        settingsPage.getAddNewAutoFillValue().should('be.visible').and('have.text', 'Add New Auto Fill Value').click({force: true});

        settingsPage.getStringValueAndNumericValueButtons().should('be.visible').and('have.text', 'String valueNumeric value');

        settingsPage.getKeyInputArea().should('be.visible').and('have.text', '').type("<KEYNAME>");
        settingsPage.getKeyInputArea().should('be.visible').and('have.text', '').clear();

        settingsPage.getValueInputArea().should('be.visible').and('have.text', '').click();

        settingsPage.getKeyCanOnlyIncludeALERT().should('be.visible').and('have.text', 'Key can only include lowercase letters, numbers, dash and underscore');

        settingsPage.getVALUE().should('be.visible').and('have.text', '').type("<VALUE>");
        settingsPage.getVALUECapsulated().should('be.visible').clear();

        settingsPage.getPLEASECHECKVALUENotification().should('be.visible').and('have.text', 'Please check value');

    });
});
