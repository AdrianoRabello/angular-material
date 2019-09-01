import { FormMaterialComponent } from './form-material/form-material.component';

import {Routes} from '@angular/router'
import { NavbarComponent } from './navbar/navbar.component';
import { CbmesCardComponent } from './shared/cbmes-card/cbmes-card.component';



export const ROUTES: Routes = [
    {path: '',component:FormMaterialComponent},
    {path: 'form',component:FormMaterialComponent},
    {path: 'navbar',component:NavbarComponent},
    {path: 'card',component:CbmesCardComponent},
   
    /*{path: 'restaurants',component:RestaurantsComponent},
    {path: 'restaurants/:id',component:RestaurantDetailComponent,
        children: [
            {path: '',redirectTo: 'menu',pathMatch:'full'},
            {path: 'menu',component:MenuComponent},
            {path:'reviews', component:RevewsComponent}
        ]
    }*/
]