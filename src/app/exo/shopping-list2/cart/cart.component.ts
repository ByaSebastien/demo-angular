import { Component } from '@angular/core';
import { CartItem } from '../../../models/cart.item.model';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cart!: CartItem[];

  constructor(
    private readonly _cartService: CartService
  ){
    this.cart = _cartService.getAll();
  }

  increaseOne(i: number){
    this._cartService.increaseOne(i);
  }

  removeOne(i: number){
    this._cartService.removeOne(i);
  }

  delete(i: number){
    this._cartService.delete(i);
  }

}
