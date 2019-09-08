



import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';

import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

import { Categoria } from '../models/categoria';
import { CategoriaService } from '../service/categoria.service';




@Component({
    selector: 'app-categoria-list',
    templateUrl: './categoria-list.component.html',
    styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit, AfterViewInit {

    public categorias:Categoria[] = []

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    //public dataSource = ELEMENT_DATA;
    public dataSource = new MatTableDataSource(this.categorias);

   

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;


    constructor(private categoriaService: CategoriaService) { }


    ngAfterViewInit() {

    }

    ngOnInit() {


            
        this.atulizarLista();

        /*this.categoriaService.currentMessage$.subscribe((res) => {           
            this.dataSource.data = res;
        })*/

    }

    getListaCategoria(){
        this.categoriaService.getCategorias().subscribe((response) => {

            //console.log(response)
            this.categorias = response;
            //
            let categorias = new MatTableDataSource(this.categorias)

            this.dataSource = categorias;

        })
    }

    atulizarLista(){
        this.categoriaService.currentMessage$.subscribe((res) => {           
            this.dataSource.data = res;
        })
    }





    remove(categoria: Categoria) {

        let found = this.categorias.indexOf(categoria);

        this.categorias = this.removeByIndex(this.categorias, found)

        //this.categoriaService.atulizarlista
        //let flag = new MatTableDataSource(this.categorias)

        //this.dataSource = flag;

        //)

        this.dataSource.data = this.categorias;


    }

    removeByIndex(array, index) {
        return array.filter(function (el, i) {
            return index !== i;
        });
    }


    delete(categoria: Categoria) {

        this.categoriaService.delete(categoria).subscribe((res) => {
            console.log(res)
            this.getListaCategoria()
        })
        
        //this.atulizarLista()
        //this.remove(categoria);
     
        


    }

}
