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

    getGivingANameToKey() {
        return cy.get('form.ng-dirty > .list-note');
    }

    getWriteText() {
        return cy.get(':nth-child(3) > :nth-child(1) > .in-item');
    }

    getReadText() {
        return cy.get(':nth-child(2) > .in-item');
    }

    getAutoFillText() {
        return cy.get('form.ng-dirty > :nth-child(4)');
    }

    getAddAutoFillValue() {
        return cy.get(':nth-child(5) > .item-has-start-slot');
    }

    getCancelButton() {
        return cy.get('.ng-untouched > .toolbar-title-default > .buttons-first-slot > .ios');
    }

    getAddNewAutoFillValue() {
        return cy.get('.ng-untouched > .toolbar-title-default > .title-default');
    }

    getStringValueAndNumericValueButtons() {
        return cy.get('.toolbar-segment');
    }

    getKeyInputArea() {
        return cy.get('#ion-input-3');
    }

    getValueInputArea() {
        return cy.get('#ion-input-4');
    }

    getKeyCanOnlyIncludeALERT() {
        return cy.get('.item-has-value > .ng-invalid > .input-bottom > .error-text');
    }

    getVALUE() {
        return cy.get('.ng-pristine > .input-wrapper > .native-wrapper');
    }

    getVALUECapsulated() {
        return cy.get('form.ng-invalid > .list-ios > .item.ion-valid > .sc-ion-input-ios-h > .input-wrapper')
    }

    getPLEASECHECKVALUENotification() {
        return cy.get(':nth-child(2) > .sc-ion-input-ios-h > .input-bottom > .error-text');
    }


}

export default SettingsPage;
