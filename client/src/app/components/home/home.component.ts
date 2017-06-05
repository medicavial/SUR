import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  usuario = localStorage.getItem('Usuario');
  constructor() { }

  ngOnInit() {

    console.log(this.usuario);

  }

}
