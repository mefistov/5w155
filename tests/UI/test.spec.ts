import { test } from '../../src/fixtures/uiFixture';

test.describe("UI sanity test suite", (): void => {
    var successLogInMessage = 'You logged into a secure area!';
    var sucessLogOutMessage = 'You logged out of the secure area!';

    test('Initial login/logout e2e UI test', async ({loginPage, secureAreaPage, credentials}) => {
        await loginPage.goto();
        await loginPage.login(credentials.defaultUserName, credentials.defaultPassword);
        await secureAreaPage.verifyLoggedIn(successLogInMessage);
        await secureAreaPage.logOut();
        await loginPage.verifyLoggedOut(sucessLogOutMessage);
    });
});