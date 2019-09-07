import { map } from 'rxjs/operators';
import { CURSO_MC } from './../../URL/url';
import { Observable } from 'rxjs';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from 'src/app/form-material/models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServiceService {

  constructor(private http:HttpClient) { }
  
  
  getRestaurants(){

    return this.http.get<Categoria[]>(`${CURSO_MC}/categorias`);

}


}
