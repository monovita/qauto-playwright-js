import Button from '../Elements/Button';
import Input from '../Elements/Input';
import BasePage from './BasePage';

export class GaragePage extends BasePage {
	get garagePageNav() {
		return this._page.locator(`[href="/panel/garage"]`);
	}

	get addCarButton() {
		return this._page.locator(`[class="btn btn-primary"]`).filter({ hasText: 'Add car' });
	}

	get addCarModal() {
		return this._page.locator(`[class="modal-header"]`);
	}

	get carBrandDropdown() {
		return this._page.locator(`[id="addCarBrand"]`);
	}

	get carModelDropdown() {
		return this._page.locator(`[id="addCarModel"]`);
	}

	get mileageField() {
		return new Input(this._page, `[id="addCarMileage"]`);
	}

	get addButton() {
		return this._page.locator(`[type="button"]`).filter({ hasText: 'Add' });
	}

	get editCarButton() {
		return this._page.locator(`[class="icon icon-edit"]`);
	}

	get editModal() {
		return this._page.locator(`[class="modal-title"]`);
	}

	get removeCarButton() {
		return this._page.locator(`[class="btn btn-outline-danger"]`);
	}

	get confirmRemoveModal() {
		return this._page.locator(`[class="modal-title"]`).filter({ hasText: 'Remove Car' });
	}

	get confirmRemoveButton() {
		return this._page.locator(`[class="btn btn-danger"]`);
	}
}
