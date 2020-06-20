import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
