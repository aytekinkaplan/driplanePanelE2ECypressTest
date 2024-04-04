export class CreateAccount {
    constructor() {
    }

    getEmailInput() {
        return cy.get('.can-go-back > app-modal-view > .content-ltr > ion-grid.ios > .modal-view-container-row > ion-col.ios > .modal-view-container > form.ng-untouched > .list-ios > :nth-child(1) > [data-testid="usernameInput"] > .input-wrapper');
    }

    getEmailInput2() {
        return cy.get('#ion-input-2');
    }

    getPasswordInput() {
        return cy.get('.can-go-back > app-modal-view > .content-ltr > ion-grid.ios > .modal-view-container-row > ion-col.ios > .modal-view-container > form.ng-untouched > .list-ios > :nth-child(2) > [data-testid="passwordInput"] > .input-wrapper')
    }

    getPasswordInput2() {
        return cy.get('#ion-input-3');
    }

    getVerifyPasswordInput() {
        return cy.get('[data-testid="passwordVerifyInput"] > .input-wrapper');
    }

    getVerifyPasswordInput2() {
        return cy.get('#ion-input-4');
    }

    getCreateAccountButton() {
        return cy.get('form.ng-invalid > [data-testid="signupButton"]');
    }

}