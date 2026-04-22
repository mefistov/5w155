import { LoginPage } from "../pages/LoginPage";
import { SecureAreaPage } from "../pages/SecureAreaPage";
import { test as baseTest } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: [path.resolve(process.cwd(), '.env')],
    override: true
});

type UiFixture = {
    loginPage: LoginPage;
    secureAreaPage: SecureAreaPage;
    credentials: {
        defaultUserName: string;
        defaultPassword: string;
    }
};
export const test = baseTest.extend<UiFixture>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    secureAreaPage: async ({ page }, use) => {
        await use(new SecureAreaPage(page));
    },
    credentials: async({}, use) => {
        if(!process.env.USERNAME || !process.env.PASSWORD){
            throw new Error('Missing credentials in .env file');
        }
        await use({
            defaultUserName: process.env.USERNAME,
            defaultPassword: process.env.PASSWORD,
        });
    }
});

export { expect } from '@playwright/test'