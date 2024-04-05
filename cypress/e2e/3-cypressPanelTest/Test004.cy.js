import {loginprocess} from "../../pages/loginprocess";

describe('Should log in successfully', () => {
    before('Set up objects for each test', () => {
        cy.on("uncaught:exception", (err, runnable) => {
            return false
        });
    });
    it('Should log in successfully and navigate to the dashboard', () => {
        loginprocess("aoniki2018@gmail.com", "Aytekinkaplan1184811@", "projects");
    });
});
