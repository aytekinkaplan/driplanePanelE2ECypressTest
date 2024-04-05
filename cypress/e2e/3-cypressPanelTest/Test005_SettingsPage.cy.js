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

        const element = settingsPage.getProjectID();
        const text = element.textContent;
        cy.log(text)

        settingsPage.getProjectAPIKeys().should('be.visible');

        const apiKeysElement = settingsPage.getProjectAPIKeys().textContent;
        cy.log(apiKeysElement);
    });
});
