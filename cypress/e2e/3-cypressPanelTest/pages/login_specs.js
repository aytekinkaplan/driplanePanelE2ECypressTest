class LoginPage {
    constructor() {
    }

    visitLoginPage() {
        cy.visit("/login");
    }


    getDriplaneText() {
        // Assertion eklenebilir: .should('be.visible').contains('Driplane');
        return cy.get('h1').contains('Driplane'); // İsteğe bağlı: Zincirleme için return
    }

    getEmailInput() {
        return cy.get('[data-testid="usernameInput"] > .input-wrapper > .native-wrapper');
    }

    getPasswordInput() {
        return cy.get('[data-testid="passwordInput"] > .input-wrapper > .native-wrapper');
    }

    getLoginButton() {
        return cy.contains('Login'); // CSS seçicisi düzeltilmiş
    }

    getResetButton() {
        return cy.get('[data-testid="resetPasswordButton"]');
    }

    getCreateAccountButton() {
        return cy.get('[data-testid="signupButton"]');
    }

    getForgotPasswordButton() {
        return cy.get('body > app-root > ion-app > ion-router-outlet > app-login > app-modal-view > ion-content > ion-grid > ion-row > ion-col > div > form > ion-list > ion-item.item.ios.item-lines-default.item-fill-none.in-list.ion-focusable.hydrated > ion-button');
    }

    login(email, password) {
        this.visitLoginPage();
        this.getEmailInput().type(email);
        this.getPasswordInput().type(password);
        this.getLoginButton().click();
        this.getDriplaneText().should('be.visible').contains('/projects');

    }
}

export default LoginPage;
