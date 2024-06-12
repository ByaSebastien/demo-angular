import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoTimerComponent } from './exo-timer/exo-timer.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingList2Component } from './shopping-list2/shopping-list2.component';

const routes: Routes = [
  {path:'', children:[
    {path:'exo01',component: ExoTimerComponent},
    {path:'exo02',component: ShoppingListComponent},
    {path:'exo03',component: ShoppingList2Component},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
