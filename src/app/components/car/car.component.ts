import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { CarDto } from 'src/app/models/Dtos/carDto';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: CarDto[] = [];
  dataLoaded = false;

  constructor(
    private carService: CarService,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      //this.cars = response.data;
     
      response.data.forEach((car) => {
        this.brandService.getBrandById(car.brandId).subscribe((response) => {
          // response.data.forEach((brand) => {
          //   this.cars.push({
          //     id: car.id,
          //     brandId: car.brandId,
          //     modelId: car.modelId,
          //     modelYear: car.modelYear,
          //     price: car.price,
          //     brandName: brand.brandName,
          //     colorId: car.colorId,
          //     description: car.description,
          //   });
          //   this.dataLoaded = true;
          // });
          
          this.cars.push({
            id: car.id,
            brandId: car.brandId,
            modelId: car.modelId,
            modelYear: car.modelYear,
            price: car.price,
            brandName: response.data[0].brandName,
            colorId: car.colorId,
            description: car.description,
          });
          this.dataLoaded = true;
        });
        
      });
    });
  }

  getBrandName(id: number):any {
   this.brandService.getBrandById(id).subscribe((response) => {
      response.data.forEach((brand) => {
        return brand.brandName;
      });
    });
  }
}
