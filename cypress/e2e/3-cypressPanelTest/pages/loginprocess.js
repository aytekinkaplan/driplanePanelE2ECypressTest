import LoginPage from "./login_specs";

export function loginprocess(userEmail, userPassword) {
    cy.visit("/login");
    cy.get("[data-testid=\"usernameInput\"] > .input-wrapper > .native-wrapper").type(userEmail);
    cy.get("[data-testid=\"passwordInput\"] > .input-wrapper > .native-wrapper").type(userPassword);
    cy.get("ion-button:contains('Login')").click();
    cy.url().should("include", "/projects");
}