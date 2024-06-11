import { Component } from '@angular/core';
import { CartItem } from '../../models/cart.item.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {

  cart: CartItem[] = []

  productName: string = '';
  quantity: number = 1;

  add(){
    let cartItem : CartItem | undefined = this.cart.find(c => c.name === this.productName)
    if(cartItem){
      cartItem.quantity += this.quantity;
    }else{
      this.cart.push({name: this.productName,quantity:this.quantity});
    }
  }

  delete(index: number){
    this.cart.splice(index,1);
  }

  removeOne(cartItem: CartItem){
    cartItem.quantity -=1
    if(cartItem.quantity === 0){
      let index = this.cart.indexOf(cartItem);
      this.cart.splice(index,1);
    }
  }

  addOne(cartItem: CartItem){
    cartItem.quantity += 1;
  }
}
