class RightUpperCornerSection {
    constructor() {}

    getLastMonth() {
        //return cy.get(".ng-pristine.ng-valid.ios.has-value.ion-focusable.select-ltr.select-justify-space-between.select-label-placement-start.hydrated.ng-touched.ion-pristine.ion-valid.ion-touched").shadow().find("#select-label");
   // return cy.get("ion-label:contains('Last Month')");
    return cy.contains("Last Month");
    }





}

export default RightUpperCornerSection;