describe('', () => {
    it('should ', () => {
        cy.fixture("userLoginTest.json").then((data)=>{
            const { email, password } = data[0];
            let loginPage;
            loginPage.getEmailInput().type(email);
            loginPage.getPasswordInput().type(password);
            // Assertions for successful login should be added here
        })
    });
});