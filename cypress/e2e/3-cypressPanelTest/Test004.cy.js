import {loginprocess} from "../../support/commands";

describe('Should log in successfully', () => {
    it('Should log in successfully and navigate to the dashboard', () => {
        cy.fixture("loginprocess.json").then((data) => {
            loginprocess(data[0].userEmail, data[0].userPassword, "projects");
        });

    });

});