import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    timeout: 30000,

    retries: process.env.CI ? 2 : 0,

    reporter: [
        ['html', { outputFolder: 'test-reports/html' }],
        ['json', { outputFile: 'test-reports/report.json' }],
        ['list'],
    ],

    globalSetup: './src/global-setup.ts',
    globalTeardown: './src/global-teardown.ts',

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'safari',
            use: { ...devices['Desktop Safari'] },
        },
    ],

    fullyParallel: true,
    workers: process.env.CI ? 2 : undefined,

    outputDir: './test-results',
});
