import { Component, OnInit } from '@angular/core';
import { EmployeeBenefitCostService } from '../services/employee-benefit-cost.service';
import { first } from 'rxjs/operators';
import { Employee } from '../models/employee.model';
import { CostPreviewContract } from '../models/cost-preview.model';
import { EmployeeBenefitCostFormService } from '../services/employee-benefit-cost-form.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-preview-benefits-cost-component',
    templateUrl: './preview-benefits-cost.component.html'
})
export class PreviewBenefitsCostComponent implements OnInit {

    preview: CostPreviewContract;
    employee: Employee;

    constructor(private formService: EmployeeBenefitCostFormService,
                private benefitCostService: EmployeeBenefitCostService,
                private router: Router) { }

    ngOnInit() {
        this.employee = this.formService.employee;
        this.benefitCostService.previewCost(this.employee)
            .pipe(first())
            .subscribe(result => {
                this.preview = result;
            });
    }

    return() {
        this.formService.employee = this.employee;
        this.router.navigateByUrl('employee');
    }
}
