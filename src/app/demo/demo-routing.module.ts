import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';

const routes: Routes = [
  { path: '', component: DemoComponent, children: [
    { path: 'demo01',component: DemoBindingsComponent},
    { path: 'demo02',component: DemoPipeComponent},
    { path: 'demo03',component: DemoDirectivesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
