class DashboardPage {

    constructor() {
    }

    getLeftCornerButton() {
        cy.log("Left Corner Button is visible");
        return cy.get('ion-menu-button[class="ios button in-toolbar ion-activatable ion-focusable hydrated"]').shadow().find('.button-inner');
    }

    getDashButton() {
        return cy.get("ion-label:contains('Dashboard')");
    }
    getSettingsButton() {
        return cy.get("ion-label:contains('Settings')");
    }
/*  getScriptCodeArea(){
        return cy.get('pre[class="hljs"]');
  }*/

    getScriptCodeArea(){
        return cy.get('.hljs');
    }

  getEmailArea(){
        return cy.get('ion-note[data-testid="loggedInUser"]');
  }

  getAccountSettings(){
        return cy.get('.list-ios > [routerdirection="root"] > .sc-ion-label-ios-h');
  }
}

export default DashboardPage;
