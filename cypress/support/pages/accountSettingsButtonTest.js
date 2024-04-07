export class AccountSettingsButtonTest {
    projectNumber;

    constructor() {
    }

    getAccountSettingsPageTitle() {
        return cy.get('.title-default');
    }

    getAddNewProjectButton() {
        return cy.get('ion-button:contains("Add new project")');
    }

    getCancelButton() {
        return cy.get('.ion-delegate-host > .header-ios > .toolbar-title-default > .buttons-first-slot > .ios');
    }

    getGiveYourProjectName() {
        return cy.get('.input-wrapper');
    }

    getGiveYourProjectNameInput() {
        return cy.get('.native-input.sc-ion-input-ios').last();
    }

    getProjectSourceName() {
        return [
            "Phoenix Rising",
            "Eclipse",
            "Lunar Horizon",
            "Aurora Borealis",
            "Galactic Odyssey",
            "Stellar Journey",
            "Nebula Quest",
            "Celestial Voyage",
            "Solar Eclipse",
            "Cosmic Explorer",
            "Orion Nebula",
        ];
    }

    getConfirmationButton() {
        return cy.get('.buttons-last-slot > .ios');
    }

    getSwipeLeft() {
        return cy.get('#main-content > app-account > ion-content > ion-list > ion-item-sliding:nth-child(3) > ion-item');

    }

}