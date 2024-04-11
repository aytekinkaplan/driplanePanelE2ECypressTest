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
        return cy.get('.list-lines-none > :nth-child(3)');
    }

    getProjectClientSecret() {
        return cy.get('.list-lines-none > :nth-child(4)');
    }

    getProjectAPIKeys() {
        return cy.get('ion-item-sliding.ios > .item');
    }

    getProjectEvents() {
        return cy.get(':nth-child(4) > ion-list-header.ios > .sc-ion-label-ios-h');
    }

    getCreateNewKey() {
        return cy.get('.limited-width > :nth-child(2) > .item-has-start-slot > .sc-ion-label-ios-h');
    }

    getCreateProjectKey() {
        return cy.get('.can-go-back > .header-ios > .toolbar-title-default > .title-default');
    }

    getKeyNameArea() {
        return cy.get('#ion-input-0');
    }

    getGivingANameToKey(){
        return cy.get('form.ng-dirty > .list-note');
    }


}

export default SettingsPage;
