import { expect } from '@playwright/test';

export default class {
	constructor(page, selector, text) {
		this.element = text ? page.getByText(text) : page.locator(selector);
	}

	async checkText(expectedText) {
		await expect(this.element).toContainText(expectedText);
	}
}
