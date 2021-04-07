import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ImageService} from '../../services/image.service';
import {Image} from '../../models/image';
import {Brand} from '../../models/brand';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  images:Image[];
  baseUrl:string="https://localhost:44327/";

  constructor(private activatedRoute: ActivatedRoute, private imageService: ImageService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getImageById(params['carId']);
      } else {
        console.log('cardetails');
      }
    });
  }


  getImageById(id: number) {
    this.imageService.getImageById(id).subscribe((response) => {
      this.images=response.data;
    });
  }

}
