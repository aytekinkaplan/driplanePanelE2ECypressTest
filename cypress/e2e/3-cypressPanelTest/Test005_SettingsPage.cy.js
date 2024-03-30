import SettingsPage from "./pages/settingspage";
import LoginPage from "./pages/login_specs";
import DashboardPage from "./pages/dashboardpage";
import {loginprocess} from "./pages/loginprocess";

describe('Settings Page Navigation After Login', () => {
    let settingsPage;
    let loginPage;
    let dashboardPage;

    beforeEach('Set up objects for each test', () => {
        settingsPage = new SettingsPage();
        loginPage = new LoginPage();
        dashboardPage = new DashboardPage();
    });

    it('Logs in successfully, navigates to dashboard, and opens Settings page', () => {
        // 1. Set viewport dimensions (optional based on your application)
        cy.viewport(768, 1024);

        // 2. Login with valid credentials (replace with your credentials)
        loginprocess("userEmail", "userPassword");

        // 3. Verify successful login and navigate to dashboard (if applicable)
        dashboardPage.verifyIsOnDashboard(); // Assuming you have a method for this

        // 4. Access Settings
        //  - Option 1: If Settings button is a fixed element on the page
        settingsPage.getSettingsButton().click({ force: true });

        // 5. Verify Settings page is loaded
        settingsPage.getProjectNameDPS().should('be.visible'); // Assuming this element is present on the Settings page
    });
});
