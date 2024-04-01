export class CustomCommandsLogin {
    static visitingPages() {
        return cy.visit("/login");
    }

    static userEmail() {
        return cy.get("[data-testid=\"usernameInput\"] > .input-wrapper > .native-wrapper");
    }

    static userPassword() {
        return cy.get("[data-testid=\"passwordInput\"] > .input-wrapper > .native-wrapper");
    }

    static loginButton() {
        return cy.get("ion-button:contains('Login')").click();
    }

    static loginPrecessisSuccess() {
        return cy.url().should("include", "/projects");
    }

}