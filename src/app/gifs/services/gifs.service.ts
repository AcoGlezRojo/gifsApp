import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SeachGifsResponse } from '../interfaces/gifs.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  public resultados: Gif[] = [];

  constructor(private http: HttpClient) {

    console.log(environment.apiKey);

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

    const params = new HttpParams()
      .set('api_key', environment.apiKey)
      .set('limit', '10')
      .set('q', query);

    //observable
    this.http.get<SeachGifsResponse>(`${environment.apiURL}/search`, { params: params })
      .subscribe(
        (resp) => {
          // console.log('resp', resp.data);
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
