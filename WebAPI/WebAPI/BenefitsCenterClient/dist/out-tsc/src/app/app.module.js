"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var nav_menu_component_1 = require("./nav-menu/nav-menu.component");
var home_component_1 = require("./home/home.component");
var preview_benefits_cost_component_1 = require("./preview-benefits-cost/preview-benefits-cost.component");
var employee_component_1 = require("./employee/employee.component");
var employee_benefit_cost_service_1 = require("./services/employee-benefit-cost.service");
var employee_benefit_cost_form_service_1 = require("./services/employee-benefit-cost-form.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_menu_component_1.NavMenuComponent,
                home_component_1.HomeComponent,
                employee_component_1.EmployeeComponent,
                preview_benefits_cost_component_1.PreviewBenefitsCostComponent
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
                http_1.HttpClientModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
                    { path: 'employee', component: employee_component_1.EmployeeComponent },
                    { path: 'preview-benefits-cost', component: preview_benefits_cost_component_1.PreviewBenefitsCostComponent },
                ])
            ],
            providers: [employee_benefit_cost_service_1.EmployeeBenefitCostService, employee_benefit_cost_form_service_1.EmployeeBenefitCostFormService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map