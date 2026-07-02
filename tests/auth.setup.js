import { test as setup, expect } from '@playwright/test';
import { LogInForm } from '../helpers/Page Objects/logInForm.js';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    const logInForm = new LogInForm(page);

    await page.goto('/');
    await logInForm.userLogin(page, process.env.USERNAME, process.env.PASSWORD);
    await expect(page).toHaveURL(`/` + `panel/garage`);
    await page.context().storageState({ path: authFile });
});