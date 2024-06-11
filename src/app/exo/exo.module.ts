import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoTimerComponent } from './exo-timer/exo-timer.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ListChildComponent } from './shopping-list/list-child/list-child.component';

@NgModule({
  declarations: [
    ExoTimerComponent,
     ShoppingListComponent, 
     ListChildComponent
    ],
  imports: [
    CommonModule,
     ExoRoutingModule,
      SharedModule
    ],
})
export class ExoModule {}
