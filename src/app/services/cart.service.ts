import { Injectable, OnInit } from '@angular/core';
import { CartItem } from '../models/cart.item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart : CartItem[] = [];

  constructor() {}

  getAll(){
    return this._cart;
  }

  add(item: CartItem){
    let existingItem : CartItem | undefined = this._cart.find(c => c.name == item.name); 
    if(existingItem){
      existingItem.quantity += item.quantity;
    }else{
      this._cart.push(item);
    }
  }

  delete(i: number){
    this._cart.splice(i,1);
  }

  removeOne(i: number){
    this._cart[i].quantity -= 1;
    if(this._cart[i].quantity == 0){
      this.delete(i);
    }
  }

  increaseOne(i: number){
    this._cart[i].quantity += 1;
  }
}
