import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl: string = environment.apiUrl + '/brands';

  constructor(private httpClient: HttpClient) {}

  getAllBrands(): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(
      this.apiUrl + '/getAll'
    );
  }

  getBrandById(id: number): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(
      this.apiUrl + '/getBrandById?id=' + id
    );
  }
}
