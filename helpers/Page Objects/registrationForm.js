import Button from '../Elements/Button';
import Input from '../Elements/Input';
import BasePage from './BasePage';

export class RegistrationForm extends BasePage {
	get signUpButton() {
		return new Button(this._page, `[class="hero-descriptor_btn btn btn-primary"]`);
	}

	get registrationModal() {
		return this._page.locator(`[class="modal-title"]`);
	}

	get nameField() {
		return new Input(this._page, `[id="signupName"]`);
	}

	get lastNameField() {
		return new Input(this._page, `[id="signupLastName"]`);
	}

	get emailField() {
		return new Input(this._page, `[id="signupEmail"]`);
	}

	get passwordField() {
		return new Input(this._page, `[id="signupPassword"]`);
	}

	get repeatPasswordField() {
		return new Input(this._page, `[id="signupRepeatPassword"]`);
	}

	get registerButton() {
		return this._page.locator(`[class="btn btn-primary"]`);
	}

	get closeSignUp() {
		return new Button(this._page, `[class="close"]`);
	}
}
