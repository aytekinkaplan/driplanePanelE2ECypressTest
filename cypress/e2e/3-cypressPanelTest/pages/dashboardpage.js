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
  getScriptCodeArea(){
        return cy.get('pre[class="hljs"]');
  }

  getEmailArea(){
        return cy.get('ion-note[data-testid="loggedInUser"]');
  }
}

export default DashboardPage;
