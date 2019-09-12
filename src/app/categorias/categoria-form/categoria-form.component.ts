
import { Categoria } from '../models/categoria';


import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriaService } from '../service/categoria.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-categoria-form',
    templateUrl: './categoria-form.component.html',
    styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

    form: FormGroup
    @Input() categoria:Categoria;
    public idCurso =5;
    constructor(private formBuilder: FormBuilder, private categoriaService: CategoriaService,private route:ActivatedRoute) { 

       console.log( this.route.snapshot.params['id']);
    }

    ngOnInit() {

        this.form = this.formBuilder.group({
            nome: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
            id: this.formBuilder.control('')
        })

      
       this.route.params.subscribe((valor) =>{console.log(valor.id)})
      

       
    }


    save(categoria: Categoria) {

       //this.categoriaService.save(categoria).subscribe((response: Categoria) => {
            //console.log(categoria)
        //})
        this.categoriaService.save(categoria);

       
    }

    ngOnChanges(categoria): void {
        this.categoria = categoria;

        
        
    }

}
