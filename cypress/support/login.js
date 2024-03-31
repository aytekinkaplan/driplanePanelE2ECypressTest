class CustomCommandsLogin {
    get visitingPages(){
        return cy.visit("/login");
    }
    get userEmail() {
        return cy.get("[data-testid=\"usernameInput\"] > .input-wrapper > .native-wrapper");
    }
    get userPassword() {
        return cy.get("[data-testid=\"passwordInput\"] > .input-wrapper > .native-wrapper");
    }
    get loginButton() {
        return cy.get("ion-button:contains('Login')").click();
    }

    get loginPrecessisSuccess() {
        return cy.url().should("include", "/projects");
    }


}
export default CustomCommandsLogin;