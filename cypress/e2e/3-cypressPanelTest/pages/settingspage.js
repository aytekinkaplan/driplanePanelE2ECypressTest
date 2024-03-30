class SettingsPage {
    constructor() {}

    getCornerButton() {
        return cy.get(".buttons-first-slot > .ios");
    }
    getSettingsButton() {
        return cy.contains("Settings").click({force: true});
    }

    getProjectNameDPS() {
        return cy.get("#main-content > app-settings > ion-header > ion-toolbar > ion-title");
    }


}

export default SettingsPage;
