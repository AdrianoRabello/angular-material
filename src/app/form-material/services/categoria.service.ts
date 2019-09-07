import { CURSO_MC } from './../../URL/url';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Categoria } from '../models/categoria.model';
import { Observable, throwError } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';



@Injectable()
export class CategoriaService {


    private categorias: Categoria[];

    constructor(private http: HttpClient) {

    }

    public getCategorias():Observable<Categoria[]>{

        //console.log("dentro do service")

        return this.http.get<Categoria[]>(`${CURSO_MC}categorias`)
        //return this.http.get(`${CURSO_MC}categorias`).pipe(map(item: Categoria[]) => {response.json()})

        /*  return this.http.get(`${CURSO_MC}categorias`).pipe(
            map((data: Categoria[]) => {         this.categorias = data;    return this.categorias; }), 
            catchError( error => {
              return throwError( 'Something went wrong!' )
            })
         ) */

        //return this.http.get(`${CURSO_MC}categorias`).pipe(map((response) => response))
        //return this.http.get(`${CURSO_MC}categorias`).pipe(map((response) => response))
    }


    getbyId() {

        let params = new HttpParams().set('id', '1');

        return this.http.get(`${CURSO_MC}categorias/`, { params });
    }

    save(categoria: Categoria) {


        return this.http.post(`${CURSO_MC}categorias`, categoria);
    }
}