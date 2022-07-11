import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: []
})
export class BuscadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buscar(){
    console.log('object');
  }

}
