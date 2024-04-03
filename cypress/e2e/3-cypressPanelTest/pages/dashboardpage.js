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

  getAccountSettings(){
        return cy.get("body > app-root:nth-child(1) > ion-app:nth-child(1) > ion-router-outlet:nth-child(1) > app-sidemenu:nth-child(1) > ion-split-pane:nth-child(1) > ion-menu:nth-child(1) > ion-footer:nth-child(2) > ion-list:nth-child(1) > ion-item:nth-child(2) > ion-label:nth-child(2)");
  }
}

export default DashboardPage;
