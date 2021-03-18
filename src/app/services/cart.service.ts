import {Injectable} from '@angular/core';
import {CarDto} from '../models/Dtos/carDto';
import {CartItems} from '../models/cartItems';
import {CartItem} from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
  }

  addToCart(car: CarDto) {
    let item = CartItems.find(c => c.car.id === car.id);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  list(): CartItem[] {
    return CartItems;
  }

  removeForCart(car: CarDto) {
    let item: CartItem = CartItems.find(c => c.car.id === car.id);
    item.quantity > 1 ? item.quantity-- : CartItems.splice(CartItems.indexOf(item), 1);
  }
}
