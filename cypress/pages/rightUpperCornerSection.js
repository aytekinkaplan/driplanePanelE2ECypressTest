export class RightUpperCornerSection {
    constructor() {
    }

    getUpperRightCornerButton() {
        return cy.get('ion-select[slot="end"]').shadow().find("#select-label");
    }

    getLivedRightCornerButton() {
        return cy.get('body > app-root:nth-child(1) > ion-app:nth-child(1) > ion-popover:nth-child(2) > ion-select-popover:nth-child(1) > ion-list:nth-child(1) > ion-radio-group:nth-child(1) > ion-item:nth-child(1) > ion-radio:nth-child(1)').shadow().find('.label-text-wrapper');
    }
}