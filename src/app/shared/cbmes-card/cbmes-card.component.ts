import { CategoriaService } from './../../categorias/service/categoria.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-cbmes-card',
    templateUrl: './cbmes-card.component.html',
    styleUrls: ['./cbmes-card.component.css']
})
export class CbmesCardComponent implements OnInit {

    @Input() public title;
    @Input() public descripton;
    public form:FormGroup;
    constructor(private service: CategoriaService,private formBuilder:FormBuilder) { }

    ngOnInit() {

        this.form = this.formBuilder.group({
            message: this.formBuilder.control('',[Validators.required])
        })

        /*this.service.getMessage()
        .pipe(tap(value => console.log("detro do datp. Value= ",value,this.title)))
        .subscribe((res) => {this.title = res})*/
        
    }

    sendMessage(message:string){
        console.log(this.form.value.message)
       this.service.setMessage(this.form.value.message);
    }

}
