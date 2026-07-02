import BaseElement from "./BaseElement";

export default class extends BaseElement {
    constructor (page, selector) {
        super(page, selector);
    }

    async fill(text) {
        await this.element.fill(text); 
    }

    async blur() {
        await this.element.blur();
    }

    async fillAndBlur(value) {
        await this.element.fill(value);
        await this.element.blur();
    }

    async clear() {
        await this.element.clear();
    }

    async click() {
        await this.element.click();
    }

    async fillAndBlurAndClear(value) {
        await this.element.fill(value);
        await this.element.blur();
        await this.element.clear();
    }
}