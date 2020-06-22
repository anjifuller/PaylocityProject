import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { PreviewBenefitsCostComponent } from './preview-benefits-cost/preview-benefits-cost.component';
import { EmployeeComponent } from './employee/employee.component';

import { EmployeeBenefitCostService } from './services/employee-benefit-cost.service';
import { EmployeeBenefitCostFormService } from './services/employee-benefit-cost-form.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    EmployeeComponent,
    PreviewBenefitsCostComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'employee', component: EmployeeComponent },
      { path: 'preview-benefits-cost', component: PreviewBenefitsCostComponent },
    ])
  ],
  providers: [EmployeeBenefitCostService, EmployeeBenefitCostFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
