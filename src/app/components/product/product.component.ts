import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product1 = { productId: 1, productName: 'Bmw', categoryId: 1, unitPrice: 5 };
  product2 = { productId: 1, productName: 'Audi', categoryId: 1, unitPrice: 5 };
  product3 = { productId: 1, productName: 'Opel', categoryId: 1, unitPrice: 5 };

  products = [this.product1, this.product2, this.product3];

  constructor() {}

  ngOnInit(): void {}
}
