import { CategoriaService } from './categorias/service/categoria.service';



import { ROUTES } from './app.routes';
import { MeterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormMaterialComponent } from './form-material/form-material.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImputMaterialComponent } from './shared/imput-material/imput-material.component';
import { CbmesCardComponent } from './shared/cbmes-card/cbmes-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';

import { HttpClientModule } from '@angular/common/http';
import { DatatableComponent } from './shared/datatable/datatable.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaFormComponent } from './categorias/categoria-form/categoria-form.component';
import { CategoriaListComponent } from './categorias/categoria-list/categoria-list.component';
import { CategoriaDetailComponent } from './categorias/categoria-detail/categoria-detail.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { FundoAmareloDirective } from './diretivas/fundo-amarelo.directive';
import { HighlightDirective } from './diretivas/highlight.directive';
import { AllowClickDirective } from './diretivas/allow-click.directive';





@NgModule({
  declarations: [
    AppComponent,
    FormMaterialComponent,
    ImputMaterialComponent,
    CbmesCardComponent,
    NavbarComponent,
    MenuComponent,
    DatatableComponent,
    CategoriasComponent,
    CategoriaFormComponent,
    CategoriaListComponent,
    CategoriaDetailComponent,
    NgContentComponent,
    FundoAmareloDirective,
    HighlightDirective,
    AllowClickDirective,
  

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MeterialModule,
    
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    CategoriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
