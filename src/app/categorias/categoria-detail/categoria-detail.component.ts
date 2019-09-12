import { Categoria } from './../models/categoria';

import { CategoriaService } from './../service/categoria.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-detail',
  templateUrl: './categoria-detail.component.html',
  styleUrls: ['./categoria-detail.component.css']
})
export class CategoriaDetailComponent implements OnInit {

  private form:FormGroup
  public categoria:Categoria;
  constructor(private formBuilder:FormBuilder,
                private activateRoute:ActivatedRoute,
                private categoriaService:CategoriaService,
                private route:Router) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
        nome: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
        id: this.formBuilder.control('')
    })

    let id = this.activateRoute.snapshot.params['id'];

    this.categoria = this.categoriaService.getCategoria(id);
    this.populaForm(this.categoria)
        
  }

  public populaForm(categoria:Categoria){

    this.form.setValue(categoria);
  }

  update(categoria:Categoria){
    this.categoriaService.update(categoria).subscribe((res) => {
        
        if(res){
            console.log(res);
            this.route.navigateByUrl('/categorias')
        }
    })
  }

}
