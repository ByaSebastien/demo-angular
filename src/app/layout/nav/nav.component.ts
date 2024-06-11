import { Component } from '@angular/core';
import { LinkModel } from '../../models/link.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  links: LinkModel[] = [
    { title: "Home", url: "/home"},
    { title: "About", url: "/home/about"},
    { title: "Demo", url: "/demo", children: [
      {title: "Bindings", url: '/demo/demo01'},
      {title: "Pipes", url: '/demo/demo02'},
      {title: "Directives", url: '/demo/demo03'},
      {title: "Input / Output", url: '/demo/demo04'},
    ], isVisible: false},
    { title: 'Exo', children: [
      {title: "Timer", url: '/exo/exo01'},
      {title: "Shopping list", url: '/exo/exo02'},
    ], isVisible: false}
  ];

  toggleIsVisible(link: LinkModel):void{
    for(let l of this.links){
      if(l !== link){
        l.isVisible = false;
      }
    }
    link.isVisible = !link.isVisible;
  }
}
