import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { StatesType } from '../models/states.enum';
import { EmployeeBenefitCostFormService } from '../services/employee-benefit-cost-form.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-employee-component',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
    employee: Employee;
    spouseTitle;
    dependentTitle;
    formIsValid = true;
    stateEmum = StatesType;
    statesOptions = [];

    constructor(private formService: EmployeeBenefitCostFormService,
        private router: Router) { }

    ngOnInit() {
        this.employee = this.formService.employee ? this.formService.employee : new Employee();
        this.statesOptions = Object.keys(this.stateEmum);
        this.updateTitles();
    }

    updateTitles() {
        this.spouseTitle = this.employee.hasSpouse() ? 'Spouse' : 'Add Spouse';
        this.dependentTitle = this.employee.hasDependents() ? 'Dependents' : 'Add Dependents';
    }

    cleanUpObjects() {
        if (this.employee.spouse && this.employee.spouse.isEmpty()) {
            this.employee.spouse = null;
        }

        if (!this.employee.hasDependents()) {
            this.employee.dependents = [];
        }

        this.updateTitles();
    }

    addSpouse() {
        this.cleanUpObjects();
        this.employee.createSpouse();
    }

    openDependents() {
        this.cleanUpObjects();
        if (this.employee.dependents.length === 0) {
            this.employee.createDependent();
        }
    }

    addDependent() {
        this.employee.createDependent();
    }

    removeDependent(index) {
        this.employee.removeDependent(index);
    }

    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }

    validateForm() {
        if (this.employee.isEmployeeValid()) {
            this.formIsValid = true;
        } else {
            this.formIsValid = false;
        }
    }

    previewCostClick() {
        this.validateForm();
        if (this.formIsValid) {
            this.formService.employee = this.employee;
            this.router.navigateByUrl('preview-benefits-cost');
        }
    }
}
