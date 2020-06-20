import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CostPreviewContract } from '../models/cost-preview.model';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeBenefitCostService {
  serviceUrls = {
    preview: 'http://localhost:5000/api/PreviewBenefitsCost',
  };

  constructor(private http: HttpClient) {
  }


  public previewCost(employee: Employee): Observable<CostPreviewContract> {
    let costPreview;

    this.http.post<CostPreviewContract>(this.serviceUrls.preview, employee).subscribe(result => {
      costPreview = result;
    }, error => console.error(error));
    console.log(costPreview);
    return costPreview;
  }

}
