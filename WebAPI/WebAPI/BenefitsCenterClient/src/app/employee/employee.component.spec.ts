import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeComponent } from './employee.component';
import { Person } from '../models/person.model';
import { FormsModule } from '@angular/forms';
import { EmployeeBenefitCostFormService } from '../services/employee-benefit-cost-form.service';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeComponent],
      imports: [
        FormsModule,
        RouterModule.forRoot([
          { path: 'employee', component: EmployeeComponent }
        ])],
      providers: [
        EmployeeBenefitCostFormService,
        { provide: APP_BASE_HREF, useValue: '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display a title', async(() => {
    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    expect(titleText).toEqual('Add Employees');
  }));

  it('should be valid if the Employee is valid', () => {
    component.employee.firstName = 'Employee';
    component.employee.lastName = 'LastName';
    component.validateForm();
    expect(component.formIsValid).toEqual(true);
  });

  it('it should be invalid if the Employee does not have a last name', () => {
    component.employee.firstName = 'Employee';
    component.validateForm();
    expect(component.formIsValid).toEqual(false);
  });

  it('should add a spouse to the employee object', () => {
    component.addSpouse();
    expect(component.employee.spouse).toEqual(new Person());
  });

  it('should add a dependent to the employee object', () => {
    component.addDependent();
    expect(component.employee.dependents[0]).toEqual(new Person());
  });

  it('should be valid if the employee and spouse is valid', () => {
    component.employee.firstName = 'Employee';
    component.employee.lastName = 'LastName';
    component.addSpouse();
    component.employee.spouse.firstName = 'Spouse';
    component.employee.spouse.lastName = 'LastName';
    component.validateForm();
    expect(component.formIsValid).toEqual(true);
  });

  it('should be valid if the employee and dependent is valid', () => {
    component.employee.firstName = 'Employee';
    component.employee.lastName = 'LastName';
    component.addDependent();
    component.employee.dependents[0].firstName = 'Dependent';
    component.employee.dependents[0].lastName = 'LastName';
    component.validateForm();
    expect(component.formIsValid).toEqual(true);
  });

  it('should be no more than one empty dependent', () => {
    component.addDependent();
    component.addDependent();
    component.addDependent();
    expect(component.employee.dependents.length).toEqual(1);
  });

});
