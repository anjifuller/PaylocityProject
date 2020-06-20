import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CostPreviewContract } from '../models/cost-preview.model';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeBenefitCostService {
  baseUrl;
  serviceUrls = {
    preview: 'api/PreviewBenefitsCost'
  };

  constructor(private http: HttpClient, @Inject('BASE_URL') _baseUrl: string) {
    this.baseUrl = _baseUrl;
  }

  public previewCost(employee: Employee): Observable<CostPreviewContract> {
    return this.http.post<CostPreviewContract>(this.baseUrl + this.serviceUrls.preview, employee);
  }

}
