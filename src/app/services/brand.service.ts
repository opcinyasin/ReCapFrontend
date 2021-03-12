import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl: string = 'https://localhost:44327/api/brands';

  constructor(private httpClient: HttpClient) {}

  getAllBrands(): Observable<BrandResponseModel> {
    return this.httpClient.get<BrandResponseModel>(this.apiUrl+"/getAll");
  }

  getBrandById(id:number): Observable<BrandResponseModel> {
    return this.httpClient.get<BrandResponseModel>(this.apiUrl+"/getBrandById?id="+id);
  }

}
