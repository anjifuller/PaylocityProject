"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var address_model_1 = require("./address.model");
var person_model_1 = require("./person.model");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.address = new address_model_1.Address();
        _this.dependents = [];
        return _this;
    }
    Employee.prototype.hasSpouse = function () {
        return this.spouse != null;
    };
    Employee.prototype.hasDependents = function () {
        return (this.dependents.length >= 1 && !this.dependents[0].isEmpty());
    };
    Employee.prototype.createSpouse = function () {
        if (!this.hasSpouse()) {
            this.spouse = new person_model_1.Person();
        }
    };
    Employee.prototype.createDependent = function () {
        var lastDependent = this.dependents[this.dependents.length - 1];
        if (!lastDependent || !lastDependent.isEmpty()) {
            this.dependents.push(new person_model_1.Person());
        }
    };
    Employee.prototype.removeDependent = function (index) {
        this.dependents.splice(index, 1);
    };
    Employee.prototype.isEmployeeValid = function () {
        var isSpouseValid = !this.spouse || this.spouse.isValid();
        var invalidDependents = this.dependents.filter(function (value) { return value.isValid() === false; });
        var areDependentsValid = invalidDependents.length > 0 ? false : true;
        return _super.prototype.isValid.call(this) && isSpouseValid && areDependentsValid;
    };
    return Employee;
}(person_model_1.Person));
exports.Employee = Employee;
//# sourceMappingURL=employee.model.js.map