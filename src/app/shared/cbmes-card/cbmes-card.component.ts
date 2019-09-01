import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-cbmes-card',
    templateUrl: './cbmes-card.component.html',
    styleUrls: ['./cbmes-card.component.css']
})
export class CbmesCardComponent implements OnInit {

    @Input() public title;
    @Input() public descripton;
    constructor( ) { }

    ngOnInit() {

        
    }

}
