"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var employee_component_1 = require("./employee.component");
var person_model_1 = require("../models/person.model");
var forms_1 = require("@angular/forms");
var employee_benefit_cost_form_service_1 = require("../services/employee-benefit-cost-form.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
describe('EmployeeComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [employee_component_1.EmployeeComponent],
            imports: [
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: 'employee', component: employee_component_1.EmployeeComponent }
                ])
            ],
            providers: [
                employee_benefit_cost_form_service_1.EmployeeBenefitCostFormService,
                { provide: common_1.APP_BASE_HREF, useValue: '/' }
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(employee_component_1.EmployeeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should display a title', testing_1.async(function () {
        var titleText = fixture.nativeElement.querySelector('h1').textContent;
        expect(titleText).toEqual('Add Employees');
    }));
    it('should be valid if the Employee is valid', function () {
        component.employee.firstName = 'Employee';
        component.employee.lastName = 'LastName';
        component.validateForm();
        expect(component.formIsValid).toEqual(true);
    });
    it('it should be invalid if the Employee does not have a last name', function () {
        component.employee.firstName = 'Employee';
        component.validateForm();
        expect(component.formIsValid).toEqual(false);
    });
    it('should add a spouse to the employee object', function () {
        component.addSpouse();
        expect(component.employee.spouse).toEqual(new person_model_1.Person());
    });
    it('should add a dependent to the employee object', function () {
        component.addDependent();
        expect(component.employee.dependents[0]).toEqual(new person_model_1.Person());
    });
    it('should be valid if the employee and spouse is valid', function () {
        component.employee.firstName = 'Employee';
        component.employee.lastName = 'LastName';
        component.addSpouse();
        component.employee.spouse.firstName = 'Spouse';
        component.employee.spouse.lastName = 'LastName';
        component.validateForm();
        expect(component.formIsValid).toEqual(true);
    });
    it('should be valid if the employee and dependent is valid', function () {
        component.employee.firstName = 'Employee';
        component.employee.lastName = 'LastName';
        component.addDependent();
        component.employee.dependents[0].firstName = 'Dependent';
        component.employee.dependents[0].lastName = 'LastName';
        component.validateForm();
        expect(component.formIsValid).toEqual(true);
    });
    it('should be no more than one empty dependent', function () {
        component.addDependent();
        component.addDependent();
        component.addDependent();
        expect(component.employee.dependents.length).toEqual(1);
    });
});
//# sourceMappingURL=employee.component.spec.js.map