import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-input-output',
  templateUrl: './demo-input-output.component.html',
  styleUrl: './demo-input-output.component.scss'
})
export class DemoInputOutputComponent {

  color: string = '';

  childRest? : string;

  reactToChild(r: string): void{
    this.childRest= r;
  }

}
