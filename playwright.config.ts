import { defineConfig, devices } from '@playwright/test';
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: [path.resolve(process.cwd(), '.env')]
});

export default defineConfig({
    use: {
        baseURL: process.env.BASE_URL || 'https://the-internet.herokuapp.com/login',
        headless: false,
    },
    testDir: './tests',
    timeout: 30000,
    retries: process.env.CI ? 2 : 0,
    reporter: [
        ['html', { outputFolder: 'playwright-report/html' }],
        ['json', { outputFile: 'test-reports/report.json' }],
        ['list'],
    ],
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        }
    ],
    workers: process.env.CI ? 2 : undefined,
    outputDir: './test-results',
});
