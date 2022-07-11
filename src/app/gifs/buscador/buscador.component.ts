import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: []
})
export class BuscadorComponent implements OnInit {

  // @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; //Esto es para coger un elemento del DOM

  palabra: string = '';

  constructor(private gifsService: GifsService) {

  }

  ngOnInit(): void {
  }

  realizarBusqueda(): void {
    // const valor = this.txtBuscar.nativeElement.value;
    if (this.palabra.trim().length === 0) { return }
    //   this.gifsService.buscarGifs(valor);
    //   this.txtBuscar.nativeElement.value = '';
    this.gifsService.buscarGifs(this.palabra);
    this.palabra = '';

  }

}
