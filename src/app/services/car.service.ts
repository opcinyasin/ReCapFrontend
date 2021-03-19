import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Car} from '../models/car';
import {CarDto} from '../models/Dtos/carDto';
import {ListResponseModel} from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl: string = environment.apiUrl + '/cars';

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl + '/getall');
  }

  getCarsDetails(): Observable<ListResponseModel<CarDto>> {
    return this.httpClient.get<ListResponseModel<CarDto>>(
      this.apiUrl + '/getcarsdetails'
    );
  }

  getCarDetailsById(id: number): Observable<ListResponseModel<CarDto>> {
    return this.httpClient.get<ListResponseModel<CarDto>>(
      this.apiUrl + '/getcardetailsbyid?id=' + id
    );
  }

  getCarsByBrandId(id: number): Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(
      this.apiUrl + '/getcarsbybrandid?id=' + id
    );
  }

  getCarsByColorId(id: number): Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(
      this.apiUrl + '/getcarsbycolorid?id=' + id
    );
  }
}
