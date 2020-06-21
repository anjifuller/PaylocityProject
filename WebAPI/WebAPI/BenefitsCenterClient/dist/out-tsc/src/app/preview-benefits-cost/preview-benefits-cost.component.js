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
var employee_benefit_cost_service_1 = require("../services/employee-benefit-cost.service");
var operators_1 = require("rxjs/operators");
var employee_benefit_cost_form_service_1 = require("../services/employee-benefit-cost-form.service");
var router_1 = require("@angular/router");
var PreviewBenefitsCostComponent = /** @class */ (function () {
    function PreviewBenefitsCostComponent(formService, benefitCostService, router) {
        this.formService = formService;
        this.benefitCostService = benefitCostService;
        this.router = router;
    }
    PreviewBenefitsCostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employee = this.formService.employee;
        this.benefitCostService.previewCost(this.employee)
            .pipe(operators_1.first())
            .subscribe(function (result) {
            _this.preview = result;
        });
    };
    PreviewBenefitsCostComponent.prototype.return = function () {
        this.formService.employee = this.employee;
        this.router.navigateByUrl('employee');
    };
    PreviewBenefitsCostComponent = __decorate([
        core_1.Component({
            selector: 'app-preview-benefits-cost-component',
            templateUrl: './preview-benefits-cost.component.html'
        }),
        __metadata("design:paramtypes", [employee_benefit_cost_form_service_1.EmployeeBenefitCostFormService,
            employee_benefit_cost_service_1.EmployeeBenefitCostService,
            router_1.Router])
    ], PreviewBenefitsCostComponent);
    return PreviewBenefitsCostComponent;
}());
exports.PreviewBenefitsCostComponent = PreviewBenefitsCostComponent;
//# sourceMappingURL=preview-benefits-cost.component.js.map