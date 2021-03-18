import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  dataLoaded = false;
  currenBrand:Brand;

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getAllBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;

    });
  }

  getBrandById(id:number){
    this.brandService.getBrandById(id).subscribe((response) => {
      this.brands = response.data;
    });
  }

  setCurrentBrand(brand:Brand){
    console.log(brand);
    this.currenBrand=brand;
  }

  getCurrentBrandClass(brand:Brand):string{
    if (brand==this.currenBrand) {
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
