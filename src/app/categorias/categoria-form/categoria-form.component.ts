import { Categoria } from '../models/categoria';


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriaService } from '../service/categoria.service';


@Component({
    selector: 'app-categoria-form',
    templateUrl: './categoria-form.component.html',
    styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

    form: FormGroup
    constructor(private formBuilder: FormBuilder, private categoriaService: CategoriaService) { }

    ngOnInit() {

        this.form = this.formBuilder.group({
            nome: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
            id: this.formBuilder.control('')
        })
    }


    save(categoria: Categoria) {

       //this.categoriaService.save(categoria).subscribe((response: Categoria) => {
            //console.log(categoria)
        //})
        this.categoriaService.save(categoria);

       
    }

}
