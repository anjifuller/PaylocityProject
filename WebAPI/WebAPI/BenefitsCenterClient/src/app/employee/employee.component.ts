import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Person } from '../models/person.model';
import { CostPreviewContract } from '../models/cost-preview.model';
import { EmployeeBenefitCostService } from '../services/employee-benefit-cost.service';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-employee-component',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
    currentCount = 0;
    spouseTitle = 'Add Spouse';
    dependentTitle = 'Add Dependent';
    employee = new Employee();
    costPreview: CostPreviewContract;

    constructor(private benefitCostService: EmployeeBenefitCostService) { }

    public previewCost() {
        this.benefitCostService.previewCost(this.employee)
            .pipe(first())
            .subscribe(result => {
                this.costPreview = result;
                console.log(result);
            });
    }

    public addSpouse() {
        this.cleanUpObjects();

        if (!this.employee.spouse) {
            this.employee.spouse = new Person();
            this.spouseTitle = 'Spouse';
        }
    }

    public openDependents() {
        if (this.employee.dependents && this.employee.dependents.length === 0) {
                this.dependentTitle = 'Dependents';
            this.addDependent();
        } else {
            this.cleanUpObjects();
        }

    }

    public addDependent() {
        this.cleanUpObjects();

        if (this.employee.dependents) {
            const lastLine = this.employee.dependents[this.employee.dependents.length - 1];
            if (!lastLine || !lastLine.isNull()) {
                const dependent = new Person();
                this.employee.dependents.push(dependent);
            }
        }
    }

    public removeDependent(index) {
        this.employee.dependents.splice(index, 1);
    }

    public cleanUpObjects() {
        if (this.employee.spouse && this.employee.spouse.isNull()) {
            this.spouseTitle = 'Add Spouse';
            this.employee.spouse = null;
        }
        if (this.employee.dependents && this.employee.dependents[0]) {
            if (this.employee.dependents[0].isNull) {
                this.dependentTitle = 'Add Dependents';
            }
        }

    }
}
