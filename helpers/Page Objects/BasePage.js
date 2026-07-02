import { expect } from '@playwright/test';

export default class {
	_page;
	_url;
	constructor(page, url) {
		this._page = page;
		this._url = url;
	}

	async navigate() {
		await this._page.goto(this._url);
	}

	async containUrlCheck(expectedUrl) {
		expect(await this._page.url()).toContainText(expectedUrl);
	}
}
