import { CategoriaDetailComponent } from './categorias/categoria-detail/categoria-detail.component';
import { CategoriaFormComponent } from './categorias/categoria-form/categoria-form.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { FormMaterialComponent } from './form-material/form-material.component';

import {Routes} from '@angular/router'
import { NavbarComponent } from './navbar/navbar.component';
import { CbmesCardComponent } from './shared/cbmes-card/cbmes-card.component';
import { NgContentComponent } from './ng-content/ng-content.component';



export const ROUTES: Routes = [
    {path: '',component:FormMaterialComponent},
    {path: 'form',component:FormMaterialComponent},
    {path: 'navbar',component:NavbarComponent},
    {path: 'card',component:CbmesCardComponent},
    {path: 'categorias',component:CategoriasComponent},
    {path: 'categorias/:id',component:CategoriaDetailComponent},
    {path: 'cbmescard',component:CbmesCardComponent},
    {path: 'ng-content',component:NgContentComponent},
   
    /*{path: 'restaurants',component:RestaurantsComponent},
    {path: 'restaurants/:id',component:RestaurantDetailComponent,
        children: [
            {path: '',redirectTo: 'menu',pathMatch:'full'},
            {path: 'menu',component:MenuComponent},
            {path:'reviews', component:RevewsComponent}
        ]
    }*/
]