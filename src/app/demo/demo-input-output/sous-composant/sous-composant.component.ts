import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sous-composant',
  templateUrl: './sous-composant.component.html',
  styleUrl: './sous-composant.component.scss'
})
export class SousComposantComponent {

  @Input()
  parentColor!: string;

  @Output()
  myEvent: EventEmitter<string> = new EventEmitter()

  triggerMyEvent(resp : string):void{
    this.myEvent.emit(resp);
  }
}
