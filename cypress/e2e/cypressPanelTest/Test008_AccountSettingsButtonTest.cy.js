/// <reference types="Cypress" />
import {AccountSettingsButtonTest} from "../../support/pages/accountSettingsButtonTest"; // Assuming a correct path
import {loginprocess} from "../../support/pages/loginprocess";
import DashboardPage from "../../support/pages/dashboardpage";

describe('Account Settings Button Test', () => {
    let accountSettingsButtonTest;
    let dashboardPage;

    before('Set up objects for each test', () => {
        /*cy.viewport(1280, 720);*/
        accountSettingsButtonTest = new AccountSettingsButtonTest();
        dashboardPage = new DashboardPage();
        /* cy.on("uncaught:exception", (err, runnable) => {
             return false;
         });*/

    });

    beforeEach('Perform login before each test', () => {
        cy.viewport(1280, 900);
        loginprocess("aoniki2018@gmail.com", "Aytekinkaplan@");
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
        });

    });

    it.only('Should navigate to the account settings page, verify elements, and handle project creation flow', () => {
        dashboardPage.getAccountSettings().should('be.visible').click();
        accountSettingsButtonTest.getAccountSettingsPageTitle().should('be.visible').and('have.text', 'Account Settings');
        accountSettingsButtonTest.getAddNewProjectButton().should('be.visible').and('have.text', 'Add new project').click();
        accountSettingsButtonTest.getCancelButton().should('be.visible').and('have.text', 'Cancel').click();
        /*   accountSettingsButtonTest.getAddNewProjectButton().should('be.visible').should('have.text', 'Add new project').click();
           accountSettingsButtonTest.getGiveYourProjectName().should('be.visible').should('have.text', 'Give your project a name');
           accountSettingsButtonTest.getGiveYourProjectNameInput().should('be.visible').type(accountSettingsButtonTest.getProjectSourceName()[0]);
           accountSettingsButtonTest.getConfirmationButton().should('be.visible').should('have.text', 'Confirm').click();*/

        for (let i = 0; i < accountSettingsButtonTest.getProjectSourceName().length - 0; i++) {
            accountSettingsButtonTest.getAddNewProjectButton().should('be.visible').and('have.text', 'Add new project').click();
            accountSettingsButtonTest.getGiveYourProjectName().should('be.visible').and('have.text', 'Give your project a name');
            accountSettingsButtonTest.getGiveYourProjectNameInput().should('be.visible').clear();
            accountSettingsButtonTest.getGiveYourProjectNameInput().should('be.visible').type(accountSettingsButtonTest.getProjectSourceName()[i]);
            accountSettingsButtonTest.getConfirmationButton().should('be.visible').and('have.text', 'Confirm').click({force: true});
        }


    });

    it('should ', () => {
        dashboardPage.getAccountSettings().should('be.visible').click();
        accountSettingsButtonTest.getAccountSettingsPageTitle().should('be.visible').and('have.text', 'Account Settings');
        // Assuming getSwipeLeft returns the element to swipe on
        accountSettingsButtonTest.getSwipeLeft(3)
            .trigger('mousedown', {which: 1, pageX: 620, pageY: 100})
            .trigger('mousemove', {which: 1, pageX: 600, pageY: 100})
            .trigger('mouseup').trigger('mouseleave');

    });
    /*  it('Bulk Project Deletion Test', () => {
          accountSettingsButtonTest.getProjectSourceName().forEach(projectName => {
              accountSettingsButtonTest.getDeleteProjectButton(projectName).should('be.visible').should('have.text', 'Delete Project').click();
          })

      });*/


});
