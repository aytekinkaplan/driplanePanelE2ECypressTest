const {defineConfig} = require('cypress')

module.exports = defineConfig({
    e2e: {
        // Configure your E2E tests here
        specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}",
        baseUrl: 'https://beta-panel.driplane.io/'
        //baseUrl: 'http://localhost:4200'


    },
})