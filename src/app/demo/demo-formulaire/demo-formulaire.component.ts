import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterFormModel } from '../../models/register.form.model';

@Component({
  selector: 'app-demo-formulaire',
  templateUrl: './demo-formulaire.component.html',
  styleUrl: './demo-formulaire.component.scss'
})
export class DemoFormulaireComponent {

  registerForm: FormGroup;

  constructor(
    private readonly _fb : FormBuilder
  ){
    this.registerForm = _fb.group({
      name: [null,[Validators.required,Validators.maxLength(50)]],
      breed: [null,[Validators.required]],
      birthdate: [null, [Validators.required]],
      ownerName: [null, [Validators.required]],
      password: ["Test1234=",[Validators.required,Validators.minLength(5)]]
    });
  }

  onSubmit(){

    this.registerForm.markAllAsTouched();

    if(this.registerForm.invalid){
      console.log('Form non valide');
      return;
    }

    let value : RegisterFormModel = this.registerForm.value; 
  }
}
