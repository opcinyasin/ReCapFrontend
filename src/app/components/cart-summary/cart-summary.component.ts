import {Component, OnInit} from '@angular/core';
import {CartItem} from '../../models/cartItem';
import {CartService} from '../../services/cart.service';
import {CarDto} from '../../models/Dtos/carDto';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems: CartItem[] = [];

  constructor(private cartService: CartService, private  toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.getCartList();
  }

  getCartList() {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(car: CarDto) {
    this.cartService.removeForCart(car);
    this.toastrService.error('Silindi', car.brandName + ' sepetten silindi.');
  }
}
