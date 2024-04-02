class RightUpperCornerSection {
    constructor() {}

    getUpperRightCornerButton() {
        return cy.get('ion-select[slot="end"]').shadow().find('.select-wrapper');
    }

    getLiveRadioButton(){
        return cy.get('ion-radio[class="sc-ion-select-popover-ios ios in-item radio-checked radio-justify-space-between radio-alignment-center radio-label-placement-start hydrated"]').shadow().find('.radio-wrapper');
    }





}

export default RightUpperCornerSection;