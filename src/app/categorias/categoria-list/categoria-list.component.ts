import { CategoriaService } from './../../form-material/services/categoria.service';
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Categoria } from 'src/app/form-material/models/categoria.model';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';




@Component({
    selector: 'app-categoria-list',
    templateUrl: './categoria-list.component.html',
    styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit, AfterViewInit {

    @Input() categorias = [];

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    //public dataSource = ELEMENT_DATA;
    public dataSource;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;


    constructor(private categoriaService: CategoriaService) { }


    ngAfterViewInit() {
      
    }

    ngOnInit() {



        this.categoriaService.getCategorias().subscribe((response) => {

            this.categorias = response;
            this.dataSource = new MatTableDataSource(this.categorias)



        })
        
    }





    remove(categoria: Categoria) {

        let found = this.categorias.indexOf(categoria);

        this.categorias = this.removeByIndex(this.categorias,found)       

        this.dataSource = this.categorias

       
    }

    removeByIndex(array, index) {
        return array.filter(function (el, i) {
          return index !== i;
        });
      }

}
