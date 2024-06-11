import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../../models/cart.item.model';

@Component({
  selector: 'app-list-child',
  templateUrl: './list-child.component.html',
  styleUrl: './list-child.component.scss'
})
export class ListChildComponent {

  @Input()
  cart!: CartItem[];

  @Output()
  addOneEvent: EventEmitter<CartItem> = new EventEmitter();

  @Output()
  removeOneEvent: EventEmitter<CartItem> = new EventEmitter();

  @Output()
  deleteEvent: EventEmitter<number> = new EventEmitter();

  raiseAddOne(item: CartItem){
    this.addOneEvent.emit(item);
  }

  raiseDelete(i : number){
    this.deleteEvent.emit(i);
  }
}
