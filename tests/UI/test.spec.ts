import { test } from '../../src/fixtures/uiFixture';

test.describe("UI Fixture", (): void => {
    test('1', async ({loginPage, credentials}) => {
        await loginPage.goto();
        await loginPage.login(credentials.defaultUserName, credentials.defaultPassword);
    });
});