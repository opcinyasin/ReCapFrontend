import { Component, OnInit } from '@angular/core';
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
    private carService: CarService
  ) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      //this.cars = response.data;
      this.dataLoaded = true;

      response.data.forEach((car) => {
        this.carService.getCarDetailsById(car.id).subscribe((res) => {
          let data: any = JSON.stringify(res.data);
          data = JSON.parse(data);

          this.cars.push({
            id: data['id'],
            brandName: data['brandName'],
            colorName: data['colorName'],
            modelName: data['modelName'],
            modelYear: data['modelYear'],
            price: data['price'],
            description: data['description'],
          });
        });
      });
    });
  }
}
