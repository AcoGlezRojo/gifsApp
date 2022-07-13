import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SeachGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'qWyCTi2hRQwEIRhuqVbT64BIh0c2Jp5A';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  constructor(private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }

  }

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {

    query = query.trim().toLocaleLowerCase(); //guardar en minúsula

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));

    }

    //observable
    this.http.get<SeachGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=qWyCTi2hRQwEIRhuqVbT64BIh0c2Jp5A&q=${query}&limit=10`)
      .subscribe(
        (resp) => {
          console.log('resp', resp.data);
          this.resultados = resp.data;
          localStorage.setItem('resultados', JSON.stringify(this.resultados));
        }
      );

    // fetch('https://api.giphy.com/v1/gifs/trending?api_key=qWyCTi2hRQwEIRhuqVbT64BIh0c2Jp5A&q=pikachu&limit=10')
    //   .then(resp => {
    //     resp.json().then(data => {
    //         console.log(data);
    //     })
    //   })

  }
}
