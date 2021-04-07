import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ListResponseModel} from '../models/listResponseModel';
import {Image} from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiUrl: string = environment.apiUrl + '/images';

  constructor(private httpClient:HttpClient) { }

  getImageById(id:number): Observable<ListResponseModel<Image>> {
    return this.httpClient.get<ListResponseModel<Image>>(this.apiUrl + '/getImageById?id='+id);
  }
}
