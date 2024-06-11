import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(){
    console.log('In constructor');
  }

  ngOnInit(): void {
    console.log('In onInit');
  }

  ngOnDestroy(): void {
    console.log('In onDestroy');
  }
}
