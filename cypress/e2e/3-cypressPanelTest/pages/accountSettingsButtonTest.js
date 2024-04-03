export class AccountSettingsButtonTest {
    constructor() {
    }

    getAccountSettingsPageTitle() {
        return cy.get('.title-default');
    }

    getAddNewProjectButton() {
        return cy.get('ion-button:contains("Add new project")');
    }
}