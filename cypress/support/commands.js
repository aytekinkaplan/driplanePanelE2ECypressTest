import {CustomCommandsLogin} from "./login.js";

Cypress.Commands.add("login", (userEmail, userPassword) => {
    CustomCommandsLogin.visitingPages();
    CustomCommandsLogin.userEmail().type(userEmail);
    CustomCommandsLogin.userPassword().type(userPassword);
    CustomCommandsLogin.loginButton().click();
    CustomCommandsLogin.loginPrecessisSuccess();
});
