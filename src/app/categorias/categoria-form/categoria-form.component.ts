import { Categoria } from 'src/app/form-material/models/categoria.model';
import { CategoriaService } from './../../form-material/services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-categoria-form',
    templateUrl: './categoria-form.component.html',
    styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

    form: FormGroup
    constructor(private formBuilder: FormBuilder,private categoriaService:CategoriaService) { }

    ngOnInit() {

        this.form = this.formBuilder.group({
            nome: this.formBuilder.control('',[Validators.required]),
            id: this.formBuilder.control('')
        })
    }


    save(categoria:Categoria){
        
        this.categoriaService.save(categoria).subscribe((response) => {console.log(response)})
    }

}
