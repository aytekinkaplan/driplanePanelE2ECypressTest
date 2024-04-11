/// <reference types="Cypress" />
const { faker } = require('@faker-js/faker');
import {LoginPage} from '../../support/pages/login_specs';

function loginUser(email, password) {
    cy.get("[data-testid=\"usernameInput\"] > .input-wrapper > .native-wrapper").type(email);
    cy.get("[data-testid=\"passwordInput\"] > .input-wrapper > .native-wrapper").type(password);
    cy.contains('Login').click(); // ion-button yerine contains kullanıldı
}

describe('Login Tests', () => {
    const loginData = [
        { email: faker.internet.email(), password: faker.internet.password() },
        { email: faker.internet.email(), password: faker.internet.password() },
        { email: faker.internet.email(), password: faker.internet.password() },
        { email: faker.internet.email(), password: faker.internet.password() },
    ];

    loginData.forEach((data, index) => {
        it(`should login with a valid fake email and password - TEST${index + 1}`, () => {

            cy.visit("/login");
            const { email, password } = data;
            loginUser(email, password);

            // Assert successful login (e.g., URL contains "/projects")
            cy.url().should('contain', '/projects');
        });
    });
});
