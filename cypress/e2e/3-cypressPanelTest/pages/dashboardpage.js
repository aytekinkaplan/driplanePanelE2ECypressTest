class DashboardPage {

    constructor() {}

    // Get the corner button element (improve selector if possible)
    getCornerButton() {
        return cy.get(".buttons-first-slot > .ios");
    }

    // Get the title "DID YOU ADD TRACKER CODE TO YOUR WEBSITE?"
    getDIDYOUADDTRACKERCODETOYOURWEBSITE() {
        return cy.get('#main-content')
            .get('app-project')
            .get('ion-content')
            .get('ion-grid')
            .get('ion-row')
            .get('ion-col')
            .get('ion-card')
            .get('ion-card-header')
            .get('ion-card-subtitle'); // Consider using data-testid attribute instead
    }

    // Get the title "No Data"
    getNoData() {
        return cy.get('#main-content')
            .get('app-project')
            .get('ion-content')
            .get('ion-grid')
            .get('ion-row')
            .get('ion-col')
            .get('ion-card')
            .get('ion-card-header')
            .get('ion-card-title'); // Consider using data-testid attribute instead
    }

    // Get the text "YOU CAN ADD TRACKER CODE TO YOUR WEBSITE"
    getYOUCANADDTRACKERCODETOYOURWEBSITE() {
        return cy.get('.card-content-ios > :nth-child(1)'); // Improve selector if possible
    }

    // Get the element containing the Data Driplane Token (improve selector)
    getDATADRIPLANETOKEN() {
        return cy.get('.hljs'); // Consider using a more specific selector
    }

    // Get the text "THEN YOU WILL START TO SEE YOUR VISITOR INSIGHTS IN THIS DASHBOARD"
    getTHENYOUWILLSTARTTOSEEYOURVISITORINSIGHTSINTHISDASHBOARD() {
        return cy.get('.card-content-ios > :nth-child(3)'); // Improve selector if possible
    }

    // Get the element representing "Last Month" (improve selector)
    getLastMonth() {
        return cy.get('.ng-untouched'); // Improve selector if possible
    }

    getEmailArea(){
        return cy.get('[data-testid="loggedInUser"]');
    }

    verifyIsOnDashboard(){
        cy.url().should('include', '/projects');
    }
}

export default DashboardPage;
