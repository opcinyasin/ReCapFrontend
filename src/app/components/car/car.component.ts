import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Car} from 'src/app/models/car';
import {CarDto} from 'src/app/models/Dtos/carDto';
import {BrandService} from 'src/app/services/brand.service';
import {CarService} from 'src/app/services/car.service';
import {ToastrService} from 'ngx-toastr';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: CarDto[] = [];
  dataLoaded = false;
  filterText: string = '';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private toastrService: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCarsDetails().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrandId(brandId: number) {
    this.cars = [];
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;

    });
  }

  getCarsByColorId(colorId: number) {
    this.cars = [];
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;

    });
  }

  addToCart(car: CarDto) {
    this.toastrService.success('Sepete eklendi', car.brandName);
    this.cartService.addToCart(car);
  }
}
