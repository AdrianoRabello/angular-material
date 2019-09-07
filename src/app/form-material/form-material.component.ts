import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from './services/categoria.service';
import { Categoria } from './models/categoria.model';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-form-material',
    templateUrl: './form-material.component.html',
    styleUrls: ['./form-material.component.css']
})
export class FormMaterialComponent implements OnInit {

    form: FormGroup;
    showSpinner = false;
    public categorias:Categoria [] = [];

    constructor(private formBuilder: FormBuilder, private catergoriaService: CategoriaService) {

    }

    ngOnInit() {

        this.form = this.formBuilder.group({
            nome: this.formBuilder.control('', [Validators.required]),
            /*  email: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]), */


        })

        this.catergoriaService.getCategorias().subscribe(response => this.categorias = response)

        setTimeout(function(){
            console.log(this.categorias);
        },3000)
     
    }

    loadData() {
        this.showSpinner = true;
        setTimeout(() => {
            this.showSpinner = false;
        }, 1000);
    }


    getCategorias() {
        //console.log("on submit")
        //this.catergoriaService.getCategorias().subscribe((respoponse) => { this.categorias = respoponse; console.log(this.categorias); });
        //console.log(this.catergoriaService.getCategorias())

        //console.log(this.categorias)
        //return this.catergoriaService.getCategorias().subscribe((response)=>{console.log(response)})
       this.catergoriaService.getCategorias().subscribe(response => this.categorias = response)
       //this.catergoriaService.getCategorias().subscribe((response)=>{ this.categorias= response})


    }

    save() {
        //console.log("on submit")
        let categoria = new Categoria(null,this.form.value.nome);

        //console.log(categoria)

        this.catergoriaService.save(categoria).subscribe((response) =>{ if(response){ console.log(response)}else{ console.log(response)     }})

        //console.log(this.form.value)
    }


    getById(){

       this.catergoriaService.getbyId().subscribe((response) => {console.log(response)});


     
    }
}