import BasePage from "./BasePage";
import Button from "../Elements/Button";
import Input from "../Elements/Input";

export class FuelExpenses extends BasePage {
    get fuelPageNav() {
        return this._page.locator(`[routerlink="expenses"]`); 
    }

    get carSelectDropdown() {
        return this._page.locator(`[id="carSelectDropdown"]`);
    }

    get carItem() {
        return this._page.locator(`[class="dropdown-item btn btn-link car-select-dropdown_item"]:not([disabled])`);
    }

    get addExpenseButton() {
        return new Button(this._page, `[class="btn btn-primary"]`);
    }

    get addExpenseModal() {
        return this._page.locator(`[class="modal-header"]`);
    }

    get vehicleDropDown() {
        return this._page.locator(`[id="addExpenseCar"]`);
    }

    get reportDateField() {
        return new Input(this._page, `[id="addExpenseDate"]`);
    }

    get mileageField() {
        return new Input (this._page, `[id="addExpenseMileage"]`);
    }

    get numberOfLitersField() {
        return new Input (this._page, `[id="addExpenseLiters"]`);
    }

    get totalCostField() {
        return new Input(this._page, `[id="addExpenseTotalCost"]`);
    }

    get expensesTable() {
        return this._page.locator(`[class="table expenses_table"]`);
    }

    get addButton() {
        return this._page.locator(`[type="button"]`).filter({ hasText:  'Add'}); 
    }
}