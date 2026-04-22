import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
    protected readonly page: Page;


    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('/login');
    }

    async click(locator: string | Locator) {
        if (typeof locator === 'string') {
            await this.page.click(locator);
        } else {
            await locator.click();
        }
    }

    async type(locator: string | Locator, text: string) {
        if (typeof locator === 'string') {
            await this.page.fill(locator, text);
        } else {
            await locator.fill(text);
        }
    }

    async getText(locator: string | Locator): Promise<string> {
        if (typeof locator === 'string') {
            return this.page.textContent(locator) as Promise<string>;
        } else {
            return locator.textContent() as Promise<string>;
        }
    }

    async waitToBeVisible(locator: string | Locator) {
        if (typeof locator === 'string') {
            await this.page.waitForSelector(locator, { state: 'visible' });
        } else {
            await locator.waitFor({ state: 'visible' });
        }
    }

    async expectToBeVisible(locator: string | Locator) {
        if (typeof locator === 'string') {
            await expect.soft(this.page.locator(locator)).toBeVisible();
        } else {
            await expect.soft(locator).toBeVisible();
        }
    }

    async waitForNavigation() {
        await this.page.waitForLoadState('networkidle');
    }
}
