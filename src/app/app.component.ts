import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularMterial';


  public liks:Link[] = [
    {
      label:'HOME',
      roles:['ROLE_ADMIN']
    },
    {
      label:'ADMIN',
      roles:['ROLE_ADMIN']
    }
  ]

}


export class Link{
    
  constructor(public label:string,public roles:string[]){

  }
}
