// Import statements
import SettingsPage from "./pages/settingspage";
import LoginPage from "./pages/login_specs";
import DashboardPage from "./pages/dashboardpage";
import RightUpperCornerSection from "./pages/rightuppercornersection";
import { loginprocess } from "./pages/loginprocess"; // Corrected import statement

// Test case
describe('Test Case Description', () => {
    let settingsPage;
    let loginPage;
    let dashboardPage;
    let rightUpperCornerSection;

    before('Set up objects for each test', () => {
        cy.on("uncaught:exception", (err, runnable) => {
            return false
        });
    });

    beforeEach('Set up objects for each test', () => {
        settingsPage = new SettingsPage();
        loginPage = new LoginPage();
        dashboardPage = new DashboardPage();
        rightUpperCornerSection = new RightUpperCornerSection();
    });

    it('Test Description', () => {
        // Set viewport dimensions (optional based on your application)
        cy.viewport(768, 1024);

        // Login with valid credentials (replace with your credentials)
        loginprocess("aoniki2018@gmail.com", "Aytekinkaplan1184811@");

        // Verify successful login and navigate to dashboard (if applicable)
        dashboardPage.verifyIsOnDashboard(); // Assuming you have a method for this

        // Access Right Upper Corner Section
        rightUpperCornerSection.getLastMonth().click({force: true});
    })
});
