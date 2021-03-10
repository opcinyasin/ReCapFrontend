import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from 'src/app/models/responseModel';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];

  apiUrl: string = 'https://localhost:44327/api/cars/getall';
  
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.httpClient.get<CarResponseModel>(this.apiUrl).subscribe((response) => {
      this.cars = response.data;
    });
  }
}
