import { test, expect } from '@playwright/test';
import { describe } from 'node:test';
import { LogInForm } from "../helpers/Page Objects/logInForm.js";
import { Credentials } from "../helpers/Page Objects/credentials.js";

const credentials = new Credentials();

test.describe('LogIn positive tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL("/");
  });

  test('User is logedIn with valid creadentials*', async ({ page }) => {
    const logInForm = new LogInForm(page);
    await logInForm.userLogin(page, process.env.USERNAME, process.env.PASSWORD);
    await expect(page).toHaveURL(`/` + `panel/garage`);
  });
});