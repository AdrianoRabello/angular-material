import { CategoriaService } from './../form-material/services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../form-material/models/categoria.model';
import { stringify } from 'querystring';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

public categorias= [];
  constructor(private categoriaService:CategoriaService) { }
  

  ngOnInit() {

    //this.categoriaService.getCategorias().subscribe((data) => {this.categorias = data ; console.log(data)});

   
  }

}
