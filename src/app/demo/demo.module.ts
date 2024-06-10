import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';


@NgModule({
  declarations: [
    DemoComponent,
    DemoBindingsComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
