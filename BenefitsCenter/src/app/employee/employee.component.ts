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
  public currentCount = 0;
  public spouseTitle = 'Add Spouse';
  public dependentTitle = 'Add Dependent';
  public employee = new Employee();
  public costPreview: CostPreviewContract;

  constructor(private benefitCostService: EmployeeBenefitCostService) { }

  public previewCost() {
    this.benefitCostService.previewCost(this.employee)
    .pipe(first())
    .subscribe(result => {
      this.costPreview = result;
    });
    console.log(this.costPreview);
  }

  public addSpouse() {
    this.cleanUpTitles();

    this.employee.spouse = new Person();
    this.spouseTitle = 'Spouse';
  }

  public addDependent() {
    this.cleanUpTitles();

    const dependent = new Person();
    this.employee.dependents.push(dependent);
    this.dependentTitle = 'Dependents';
  }

  public removeDependent(index) {
    this.employee.dependents.splice(index, 1);
  }

  public cleanUpTitles() {
    if (this.employee.spouse && !this.employee.spouse.firstName) {
      this.spouseTitle = 'Add Spouse';
    }
    if (this.employee.dependents && this.employee.dependents[0] && !this.employee.dependents[0].firstName) {
      this.dependentTitle = 'Add Dependents';
    }
  }
}
