import BaseElement from "./BaseElement";

export default class extends BaseElement {
    constructor (page, selector) {
        super(page, selector);
    }

    async click() {
        return await this.element.click();
    }
}