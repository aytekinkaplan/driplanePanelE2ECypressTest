/// <reference types="Cypress" />
import {loginprocess} from "../../support/pages/loginprocess";

describe('Should log in successfully', () => {
    before('Set up objects for each test', () => {
        cy.on("uncaught:exception", (err, runnable) => {
            return false
        });
    });
    it('Should log in successfully and navigate to the dashboard', () => {
        loginprocess("aoniki2018@gmail.com", "Aytekinkaplan@", "projects");
    });
});
