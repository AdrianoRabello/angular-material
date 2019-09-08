import { CURSO_MC } from './../../URL/url';


import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Categoria } from '../models/categoria';



@Injectable()
export class CategoriaService {

    private merssageSource = new Subject<Categoria[]>();
    currentMessage$ = this.merssageSource.asObservable();
    private categorias: Categoria[]= [];

    constructor(private http: HttpClient) {

        this.getCategorias().subscribe((res)=> {this.merssageSource.next(res); this.categorias= res;});
    }

    public getCategorias():Observable<Categoria[]>{

        return this.http.get<Categoria[]>(`${CURSO_MC}categorias`)
        
    }

    public atulizarlista(){
        this.getCategorias().subscribe((res)=> {this.merssageSource.next(res);this.categorias = res});
    }


    getbyId() {

        let params = new HttpParams().set('id', '1');

        return this.http.get(`${CURSO_MC}categorias/`, { params });
    }

    save(categoria: Categoria) {        
      
        this.http.post(`${CURSO_MC}categorias`, categoria).subscribe((res:Categoria) => {

           this.categorias.push(res);

           this.merssageSource.next(this.categorias);
        })

        
        
    }

    delete(categoria:Categoria){
        return this.http.delete(`${CURSO_MC}categorias/`+categoria.id)
    }
}