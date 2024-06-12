import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart.item.model';

@Component({
  selector: 'app-shopping-list2',
  templateUrl: './shopping-list2.component.html',
  styleUrl: './shopping-list2.component.scss'
})
export class ShoppingList2Component {

  productName: string = '';
  productQuantity: number = 1;

  constructor(
    private readonly _cartService: CartService
  ){}

  add(){
    if(this.productName.trim() == '' || this.productQuantity <= 0){
      return;
    }
    let item : CartItem = {name: this.productName, quantity: this.productQuantity};
    this._cartService.add(item);
  }
}
