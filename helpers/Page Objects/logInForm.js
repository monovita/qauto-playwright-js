import BasePage from "./BasePage";
import { Credentials } from "./credentials.js";

const credentials = new Credentials();
const url = "";

export class LogInForm extends BasePage{
    constructor(page) {
        super(page, url);
    }
    get logIn() {
        return this._page.locator(`[class="btn btn-outline-white header_signin"]`);
    }

    get logInModal() {
        return this._page.locator(`[class="modal-title"]`);
    }

    get emailField() {
        return this._page.locator(`[id="signinEmail"]`);
    }

    get passwordField() {
        return this._page.locator(`[id="signinPassword"]`);
    }

    get loginButton() {
        return this._page.locator(`[class="btn btn-primary"]`);
    }

    get closeLogIn() {
        return this._page.locator(`[class="close"]`);
    }

  async userLogin(page, username, password) {
  await this.logIn.click();
  await this.emailField.fill(username);
  await this.passwordField.fill(password);
  await this.loginButton.click();
}
}