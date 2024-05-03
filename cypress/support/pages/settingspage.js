// This class represents the page object for the Settings page.
class SettingsPage {
    constructor() {
    }

    // This method returns the corner button element.
    getCornerButton() {
        return cy.get(".buttons-first-slot > .ios");
    }

    // This method clicks on the Settings button and forces the click action.
    getSettingsButton() {
        return cy.contains("Settings").click({force: true});
    }

    // This method returns the project name element.
    getProjectNameDPS() {
        return cy.get("#main-content > app-settings > ion-header > ion-toolbar > ion-title");
    }

    // This method returns the project ID element.
    getProjectID() {
        return cy.get('.list-lines-none > :nth-child(3)');
    }

    // This method returns the project client secret element.
    getProjectClientSecret() {
        return cy.get('.list-lines-none > :nth-child(4)');
    }

    // This method returns the project API keys element.
    getProjectAPIKeys() {
        return cy.get('ion-item-sliding.ios > .item');
    }

    // This method returns the project events element.
    getProjectEvents() {
        return cy.get(':nth-child(4) > ion-list-header.ios > .sc-ion-label-ios-h');
    }

    // This method returns the 'Create New Key' button element.
    getCreateNewKey() {
        return cy.get('.limited-width > :nth-child(2) > .item-has-start-slot > .sc-ion-label-ios-h');
    }

    // This method returns the 'Create Project Key' element.
    getCreateProjectKey() {
        return cy.get('.can-go-back > .header-ios > .toolbar-title-default > .title-default');
    }

    // This method returns the key name area element.
    getKeyNameArea() {
        return cy.get('#ion-input-0');
    }

    // This method returns the 'Give your key a name...' note element.
    getGivingANameToKey() {
        return cy.get('form.ng-dirty > .list-note');
    }

    // This method returns the 'Write Access' text element.
    getWriteText() {
        return cy.get(':nth-child(3) > :nth-child(1) > .in-item');
    }

    // This method returns the 'Read Access' text element.
    getReadText() {
        return cy.get(':nth-child(2) > .in-item');
    }

    // This method returns the 'Auto Fill' text element.
    getAutoFillText() {
        return cy.get('form.ng-dirty > :nth-child(4)');
    }

    // This method returns the 'Add auto fill value' button element.
    getAddAutoFillValue() {
        return cy.get(':nth-child(5) > .item-has-start-slot');
    }

    // This method returns the 'Cancel' button element.
    getCancelButton() {
        return cy.get('.ng-untouched > .toolbar-title-default > .buttons-first-slot > .ios');
    }

    // This method returns the 'Add New Auto Fill Value' element.
    getAddNewAutoFillValue() {
        return cy.get('.ng-untouched > .toolbar-title-default > .title-default');
    }

    // This method returns the string value and numeric value buttons element.
    getStringValueAndNumericValueButtons() {
        return cy.get('.toolbar-segment');
    }

    // This method returns the key input area element.
    getKeyInputArea() {
        return cy.get('#ion-input-3');
    }

    // This method returns the value input area element.
    getValueInputArea() {
        return cy.get('#ion-input-4');
    }

    // This method returns the alert message for key inclusion validation.
    getKeyCanOnlyIncludeALERT() {
        return cy.get('.item-has-value > .ng-invalid > .input-bottom > .error-text');
    }

    // This method returns the value element.
    getVALUE() {
        return cy.get('.ng-pristine > .input-wrapper > .native-wrapper');
    }

    // This method returns the value capsulated element.
    getVALUECapsulated() {
        return cy.get('form.ng-invalid > .list-ios > .item.ion-valid > .sc-ion-input-ios-h > .input-wrapper')
    }

    // This method returns the notification message to check the value.
    getPLEASECHECKVALUENotification() {
        return cy.get('#ion-overlay-2 > div > ion-content > form > ion-list > ion-item:nth-child(2) > ion-input > div > div.error-text.sc-ion-input-ios');
    }
}

export default SettingsPage;
