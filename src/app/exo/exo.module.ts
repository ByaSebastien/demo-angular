import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoTimerComponent } from './exo-timer/exo-timer.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ListChildComponent } from './shopping-list/list-child/list-child.component';
import { ShoppingList2Component } from './shopping-list2/shopping-list2.component';
import { CartComponent } from './shopping-list2/cart/cart.component';
import { PokedexComponent } from './pokedex/pokedex.component';

@NgModule({
  declarations: [
    ExoTimerComponent,
     ShoppingListComponent, 
     ListChildComponent, ShoppingList2Component, CartComponent, PokedexComponent
    ],
  imports: [
    CommonModule,
     ExoRoutingModule,
      SharedModule
    ],
})
export class ExoModule {}
