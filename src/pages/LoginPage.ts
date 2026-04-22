import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    private readonly userName: Locator;
    private readonly password: Locator;
    private readonly loginButton: Locator;
    private readonly successNotification: Locator;

    constructor(page: Page) {
        super(page);
        this.userName = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.successNotification = page.locator('#flash.flash.success');
        this.loginButton = page.getByRole('button', { name: ' Login' });
    }

    async waitForPageLoadedState(){
        await this.waitForNavigation();
    }

    async login(username: string, password: string) {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async verifyLoggedOut(text: string) {
        await this.verifySuccessNotification(this.successNotification, text);
    }
}