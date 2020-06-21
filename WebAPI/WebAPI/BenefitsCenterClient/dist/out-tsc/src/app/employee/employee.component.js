"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_model_1 = require("../models/employee.model");
var states_enum_1 = require("../models/states.enum");
var employee_benefit_cost_form_service_1 = require("../services/employee-benefit-cost-form.service");
var router_1 = require("@angular/router");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(formService, router) {
        this.formService = formService;
        this.router = router;
        this.formIsValid = true;
        this.stateEmum = states_enum_1.StatesType;
        this.statesOptions = [];
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.employee = this.formService.employee ? this.formService.employee : new employee_model_1.Employee();
        this.statesOptions = Object.keys(this.stateEmum);
        this.updateTitles();
    };
    EmployeeComponent.prototype.updateTitles = function () {
        this.spouseTitle = this.employee.hasSpouse() ? 'Spouse' : 'Add Spouse';
        this.dependentTitle = this.employee.hasDependents() ? 'Dependents' : 'Add Dependents';
    };
    EmployeeComponent.prototype.cleanUpObjects = function () {
        if (this.employee.spouse && this.employee.spouse.isEmpty()) {
            this.employee.spouse = null;
        }
        if (!this.employee.hasDependents()) {
            this.employee.dependents = [];
        }
        this.updateTitles();
    };
    EmployeeComponent.prototype.addSpouse = function () {
        this.cleanUpObjects();
        this.employee.createSpouse();
    };
    EmployeeComponent.prototype.openDependents = function () {
        this.cleanUpObjects();
        if (this.employee.dependents.length === 0) {
            this.employee.createDependent();
        }
    };
    EmployeeComponent.prototype.addDependent = function () {
        this.employee.createDependent();
    };
    EmployeeComponent.prototype.removeDependent = function (index) {
        this.employee.removeDependent(index);
    };
    EmployeeComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    EmployeeComponent.prototype.validateForm = function () {
        if (this.employee.isEmployeeValid()) {
            this.formIsValid = true;
        }
        else {
            this.formIsValid = false;
        }
    };
    EmployeeComponent.prototype.previewCostClick = function () {
        this.validateForm();
        if (this.formIsValid) {
            this.formService.employee = this.employee;
            this.router.navigateByUrl('preview-benefits-cost');
        }
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'app-employee-component',
            templateUrl: './employee.component.html',
            styleUrls: ['./employee.component.scss']
        }),
        __metadata("design:paramtypes", [employee_benefit_cost_form_service_1.EmployeeBenefitCostFormService,
            router_1.Router])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map