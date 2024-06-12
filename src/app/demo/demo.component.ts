import { Component } from '@angular/core';
import { FormateurService } from '../services/formateur.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {

  constructor(private readonly _formateurService : FormateurService){}
}
