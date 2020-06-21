import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Person } from '../models/person.model';
import { StatesType } from '../models/states.enum';
import { EmployeeBenefitCostFormService } from '../services/employee-benefit-cost-form.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-employee-component',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
    currentCount = 0;
    spouseTitle = 'Add Spouse';
    dependentTitle = 'Add Dependent';
    employee = new Employee();
    stateEmum = StatesType;
    statesOptions = [];

    constructor(private formService: EmployeeBenefitCostFormService,
                private router: Router) { }

    ngOnInit() {
        this.employee = this.formService.employee ? this.formService.employee : new Employee();
        this.statesOptions = Object.keys(this.stateEmum);
    }

    addSpouse() {
        this.cleanUpObjects();

        if (!this.employee.spouse) {
            this.employee.spouse = new Person();
            this.spouseTitle = 'Spouse';
        }
    }

    openDependents() {
        if (this.employee.dependents && this.employee.dependents.length === 0) {
            this.addDependent();
        } else {
            this.cleanUpObjects();
        }
        this.dependentTitle = 'Dependents';

    }

    addDependent() {
        this.cleanUpObjects();

        if (this.employee.dependents) {
            const lastLine = this.employee.dependents[this.employee.dependents.length - 1];
            if (!lastLine || !lastLine.isNull()) {
                const dependent = new Person();
                this.employee.dependents.push(dependent);
            }
        }
    }

    removeDependent(index) {
        this.employee.dependents.splice(index, 1);
    }

    cleanUpObjects() {
        if (this.employee.spouse && this.employee.spouse.isNull()) {
            this.spouseTitle = 'Add Spouse';
            this.employee.spouse = null;
        }
        if (this.employee.dependents && this.employee.dependents[0]) {
            if (this.employee.dependents[0].isNull()) {
                this.dependentTitle = 'Add Dependents';
            }
        }
    }

    previewCostClick() {
        this.formService.employee = this.employee;
        this.router.navigateByUrl('preview-benefits-cost');
    }
}
