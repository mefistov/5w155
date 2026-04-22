import { BasePage } from "./BasePage";
import { Locator, Page } from "@playwright/test";

export class SecureAreaPage extends BasePage{
    private readonly logoutButton: Locator;
    private readonly successNotification: Locator;
    private readonly closePopUpButton: Locator;


    constructor(page: Page) {
        super(page);
        this.logoutButton = page.getByRole('link', { name: 'Logout' });
        this.successNotification = page.locator('#flash.flash.success');
        this.closePopUpButton = page.locator('#flash.flash.close');
    }

    async verifyLoggedIn(text: string) {
        await this.verifySuccessNotification(this.successNotification, text);
    }

    async logOut() {
        await this.logoutButton.click();
    }
}