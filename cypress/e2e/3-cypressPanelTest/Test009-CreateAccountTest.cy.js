/// <reference types="Cypress" />
import { CreateAccount } from "../../support/pages/createAccount";
import DashboardPage from "../../support/pages/dashboardpage";
import LoginPage from "../../support/pages/login_specs";

describe('', () => {
    let dashboardPage;
    let createAccount;
    let loginPage;

    before('Set up objects for each test', () => {
        /*cy.viewport(1280, 720);*/
        dashboardPage = new DashboardPage();
        createAccount = new CreateAccount();
        loginPage = new LoginPage();
        /* cy.on("uncaught:exception", (err, runnable) => {
             return false;
         });*/

    });

    beforeEach('Perform login before each test', () => {
        cy.visit("/login");
        cy.viewport(1280, 720);
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
        });

    });
    it('should ', () => {

        loginPage.getCreateAccountButton().should('be.visible').should('have.text', 'Create Account').click();
        cy.url().should("include", "/signup");
        createAccount.getEmailInput().should('be.visible').should('have.text', 'E-mail');
        createAccount.getPasswordInput().should('be.visible').should('have.text', 'New Password');
        createAccount.getVerifyPasswordInput().should('be.visible').should('have.text', 'Verify Password');

        createAccount.getEmailInput2().should('be.visible').type('<EMAIL>');
        createAccount.getPasswordInput2().should('be.visible').type('<EMAIL>');
        createAccount.getVerifyPasswordInput2().should('be.visible').type('PASSWORD');
        createAccount.getCreateAccountButton().should('be.visible').should('have.text', 'Register').click();
    });
});
