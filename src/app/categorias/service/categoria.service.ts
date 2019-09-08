import { CURSO_MC } from './../../URL/url';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Categoria } from '../models/categoria';



@Injectable()
export class CategoriaService {

    public merssageSource = new Subject<Categoria[]>();
    public message = new Subject<string>();
    currentMessage$ = this.merssageSource.asObservable();
    private categorias: Categoria[] = [];


    setMessage(value: string){
        this.message.next(value);
    }

    getMessage(){
        return this.message.asObservable();
    }

    constructor(private http: HttpClient) {
        console.log("dentro fdo construtor")
        this.getCategorias().subscribe((res:Categoria[])=> {this.categorias= res; this.merssageSource.next(this.categorias)});
    }

    public getCategorias():Observable<Categoria[]>{

        return this.http.get<Categoria[]>(`${CURSO_MC}categorias`)
        
    }

    pegarCategorias(){
        return this.categorias;
    }

    public atulizarlista(){
        //this.getCategorias().subscribe((res)=> {;this.categorias = res; this.merssageSource.next(this.categorias)});


        //this.merssageSource.next(this.categorias);
    }


    getbyId() {

        let params = new HttpParams().set('id', '1');

        return this.http.get(`${CURSO_MC}categorias/`, { params });
    }

    save(categoria: Categoria) {    

        //return this.http.post(`${CURSO_MC}categorias`, categoria)
        this.http.post(`${CURSO_MC}categorias`, categoria).subscribe((res:Categoria) => {
          this.categorias.push(res)
          this.merssageSource.next(this.categorias)
        })
    }

    delete(categoria:Categoria){


        this.remove(categoria);
        this.merssageSource.next(this.categorias);
        return this.http.delete(`${CURSO_MC}categorias/`+categoria.id)

    }
















    remove(categoria: Categoria) {
        let found = this.categorias.indexOf(categoria);
        this.categorias = this.removeByIndex(this.categorias, found)

        this.merssageSource.next(this.categorias);
    }

    removeByIndex(array, index) {
        return array.filter(function (el, i) {
            return index !== i;
        });
    }
}