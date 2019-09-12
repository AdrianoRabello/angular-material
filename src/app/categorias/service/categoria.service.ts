


import { CURSO_MC } from './../../URL/url';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';

import { Categoria } from '../models/categoria';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';




@Injectable()
export class CategoriaService {
   
    public categoria:Categoria;
    public categoriaSubject = new Subject<Categoria[]>();
    public message = new Subject<string>();
    //currentMessage$ = this.merssageSource.asObservable();
    private categorias: Categoria[] = [];
    public haders = new HttpHeaders({
        'Content-Type':  'application/json',
      });
    
    
    constructor(private http: HttpClient) {
        console.log("dentro do construtor do categoria service ")
        
        this.getCategorias();
    }


    setMessage(value: string){
        this.message.next(value);
    }

    getList(){

        this.getCategorias()
        this.categoriaSubject.next(this.categorias);
        return this.categoriaSubject.asObservable();
    }

    

    private  getCategorias(){

        this.http.get<Categoria[]>(`${CURSO_MC}categorias`).subscribe(res => {

            this.categorias = res
            this.categoriaSubject.next(this.categorias)
        })

        
        
    }

    gatCategoria() {

        let params = new HttpParams().set('id', '1');

        return this.http.get(`${CURSO_MC}categorias/`, { params });
    }

    save(categoria: Categoria) {    

        //return this.http.post(`${CURSO_MC}categorias`, categoria)
        this.http.post(`${CURSO_MC}categorias`, categoria).subscribe((res:Categoria) => {
          this.categorias.push(res)

          //console.log(this.categorias);
          this.categoriaSubject.next(this.categorias)
        })
    }

    delete(categoria:Categoria){


        this.remove(categoria);
        this.categoriaSubject.next(this.categorias);
        return this.http.delete(`${CURSO_MC}categorias/`+categoria.id)

    }

    getCategoria(id: number):Categoria {
     

        this.categorias.map((categoria:Categoria) => {            
            if(categoria.id == id){
                this.categoria = categoria
            }
        })
        
        return this.categoria;

      
    }

    update(categoria:Categoria){
        return this.http.put(`${CURSO_MC}categorias/${categoria.id}`,categoria)
    }

    
















    remove(categoria: Categoria) {
        let found = this.categorias.indexOf(categoria);
        this.categorias = this.removeByIndex(this.categorias, found)

        this.categoriaSubject.next(this.categorias);
    }

    removeByIndex(array, index) {
        return array.filter(function (el, i) {
            return index !== i;
        });
    }
}