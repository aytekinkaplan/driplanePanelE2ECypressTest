class SettingsPage {
    constructor() {
    }

    getCornerButton() {
        return cy.get(".buttons-first-slot > .ios");
    }

    getSettingsButton() {
        return cy.contains("Settings").click({force: true});
    }

    getProjectNameDPS() {
        return cy.get("#main-content > app-settings > ion-header > ion-toolbar > ion-title");
    }

    getProjectID() {
        return cy.get('body > app-root:nth-child(1) > ion-app:nth-child(1) > ion-router-outlet:nth-child(1) > app-sidemenu:nth-child(1) > ion-split-pane:nth-child(1) > ion-router-outlet:nth-child(2) > app-settings:nth-child(1) > ion-content:nth-child(2) > ion-list:nth-child(1) > ion-item:nth-child(3) > ion-label:nth-child(1) > p:nth-child(2)');
    }

    getProjectAPIKeys(){
        return cy.get('body > app-root:nth-child(1) > ion-app:nth-child(1) > ion-router-outlet:nth-child(1) > app-sidemenu:nth-child(1) > ion-split-pane:nth-child(1) > ion-router-outlet:nth-child(2) > app-settings:nth-child(1) > ion-content:nth-child(2) > ion-list:nth-child(1) > ion-item:nth-child(4) > ion-label:nth-child(1) > p:nth-child(2)');
    }


}

export default SettingsPage;
