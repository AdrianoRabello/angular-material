import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-material',
  templateUrl: './form-material.component.html',
  styleUrls: ['./form-material.component.css']
})
export class FormMaterialComponent implements OnInit {

    form: FormGroup;
    showSpinner = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
        nome: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
        email: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
        

    })
  }

  loadData(){
      this.showSpinner = true;
      setTimeout(() => {
          this.showSpinner = false;
      }, 1000);
  }

}
