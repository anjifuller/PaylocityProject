"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var preview_benefits_cost_component_1 = require("./preview-benefits-cost.component");
describe('PreviewBenefitsCostComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [preview_benefits_cost_component_1.PreviewBenefitsCostComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(preview_benefits_cost_component_1.PreviewBenefitsCostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should display a title', testing_1.async(function () {
        var titleText = fixture.nativeElement.querySelector('h1').textContent;
        expect(titleText).toEqual('Add Employees');
    }));
    it('should start with count 0, then increments by 1 when clicked', testing_1.async(function () {
        var countElement = fixture.nativeElement.querySelector('strong');
        expect(countElement.textContent).toEqual('0');
        var incrementButton = fixture.nativeElement.querySelector('button');
        incrementButton.click();
        fixture.detectChanges();
        expect(countElement.textContent).toEqual('1');
    }));
    it('should requre employee first and last names', function () {
    });
    it('if spouse exists, it should requre first and last name', function () {
    });
    it('if dependent exists, it should requre first and last name', function () {
    });
    it('should be no null objects in dependents', function () {
    });
    it('should call service and redirect on click of Preview', function () {
    });
});
//# sourceMappingURL=preview-benefits-cost.component.spec.js.map