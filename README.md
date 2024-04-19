# Driplane Panel E2E Tests

This project automates UI tests for the Driplane Panel using JavaScript and Cypress.

## Tools Used:

JavaScript
Cypress v13.7.1
IntelliJ IDEA 2023.3
## Test Coverage:

Visibility and functionality tests for all panel elements
Validation of transitions between pages
Login process testing with different scenarios
## Test Environment:

IntelliJ IDEA 2023.3
Localhost
## Code Example:


    describe('Testing Login and Dashboard Functionality', () => {
       let loginPage;
       let dashboardPage;

    beforeEach('Set up objects for each test', () => {
        loginPage = new LoginPage();
        dashboardPage = new DashboardPage();
    });

    it('Should log in successfully and verify dashboard elements', () => {
        cy.visit("/login");

        // Login actions
        loginPage.getEmailInput().type('dmarty@gmail.com');
        loginPage.getPasswordInput().type('alakabandadamaritus');
        loginPage.getLoginButton().click();

        cy.location('pathname').should('include', '/projects'); // Assert a specific path

        // Verify dashboard elements
        dashboardPage.getCornerButton().should('exist'); // Check existence
        dashboardPage.getCornerButton().should('be.visible'); // Check visibility

        dashboardPage.getDIDYOUADDTRACKERCODETOYOURWEBSITE().should('exist');
        dashboardPage.getNoData().should('exist');
        dashboardPage.getYOUCANADDTRACKERCODETOYOURWEBSITE().should('exist');
        dashboardPage.getDATADRIPLANETOKEN().should('exist');
        dashboardPage.getTHENYOUWILLSTARTTOSEEYOURVISITORINSIGHTSINTHISDASHBOARD().should('exist');
        dashboardPage.getLastMonth().should('exist');


    });


## Additional Information:

For detailed project documentation and code comments, please refer to the GitHub repository.
You can use the following email address for bug reports and contributions: [email address removed]
## GitHub Repository:
https://github.com/aytekinkaplan/driplanePanelE2ECypressTest.git
