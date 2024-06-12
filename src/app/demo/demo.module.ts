import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import { DemoInputOutputComponent } from './demo-input-output/demo-input-output.component';
import { SousComposantComponent } from './demo-input-output/sous-composant/sous-composant.component';
import { ComposantReutilisableComponent } from './composant-reutilisable/composant-reutilisable.component';
import { CarteFormateurComponent } from './composant-reutilisable/carte-formateur/carte-formateur.component';
import { DemoFormulaireComponent } from './demo-formulaire/demo-formulaire.component';


@NgModule({
  declarations: [
    DemoComponent,
    DemoBindingsComponent,
    DemoPipeComponent,
    DemoDirectivesComponent,
    DemoInputOutputComponent,
    SousComposantComponent,
    ComposantReutilisableComponent,
    CarteFormateurComponent,
    DemoFormulaireComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule
  ]
})
export class DemoModule { }
