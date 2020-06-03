import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, ignoreElements } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor( private http: HttpClient ) { }

  getAll() {
    return this.http.get(this.url)
    .pipe(
      //eerror jajajaja
    );
  }
  
  getSingle(id:string) {
    return this.http.get(`${ this.url }/${ id }`)
    .pipe(
      //eerror jajajaja
    );
  }

  getDt( id: string ){
    return this.http.get( `${ this.url }/${ id }` );
  }

  getComments( id: string ){
    return this.http.get( `${ this.url }/${ id }/comments` );
  }

  getDatos() {
    return this.http.get(this.url)
      .pipe(
        map( this.crearArreglo )
      );
  }

  private crearArreglo( datosObject: object ) {
    return datosObject;
  }


}
