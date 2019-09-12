import { Observable } from 'rxjs';

import { Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
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
    public categorias$:Observable<Categoria[]>;
    @Output() editEmit = new EventEmitter<Categoria>();

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    //public dataSource = ELEMENT_DATA;
    public dataSource = new MatTableDataSource(this.categorias);

   

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;


    constructor(private categoriaService: CategoriaService) { 

       
    }


    ngAfterViewInit() {

    }

    ngOnInit() {

        this.getList()
    }


    edit(categoria:Categoria){
        //console.log(categoria)
        this.editEmit.emit(categoria);
    }


            
    getList(){

      this.categorias$ = this.categoriaService.getList()

      this.categorias$.subscribe((res) => {
        this.categorias = res
        this.dataSource.data = this.categorias
      })

        

    }

    getListaCategoria(){
        this.categoriaService.getList().subscribe((response) => {          
            this.dataSource.data = response;
        })
    }

    delete(categoria: Categoria) {
        
        this.categoriaService.delete(categoria).subscribe((res) => {
            console.log(res)

            this.getListaCategoria()
        
        })
    }

    remove(categoria: Categoria) {

        let found = this.categorias.indexOf(categoria);

        this.categorias = this.removeByIndex(this.categorias, found)       
        this.dataSource.data = this.categorias;


    }

    removeByIndex(array, index) {
        return array.filter(function (el, i) {
            return index !== i;
        });
    }


   

}
