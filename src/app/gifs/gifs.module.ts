import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { FormsModule } from '@angular/forms';
import { GifsService } from './services/gifs.service';


@NgModule({
  declarations: [
    GifsPageComponent,
    BuscadorComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GifsPageComponent
  ], providers: [
    GifsService
  ]
})
export class GifsModule { }
