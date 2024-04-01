import CustomCommandsLogin from "./login.js";
export class Login {
    constructor() {
    }

    login(userEmail, userPassword) {
        CustomCommandsLogin.visitingPages();
        CustomCommandsLogin.userEmail().type(userEmail);
        CustomCommandsLogin.userPassword().type(userPassword);
        CustomCommandsLogin.loginButton().click();
    }

}