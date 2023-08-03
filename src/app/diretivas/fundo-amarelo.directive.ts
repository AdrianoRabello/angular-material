import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { style } from '@angular/animations';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef:ElementRef, private _render:Renderer2) {       
    this._render.setStyle(this._elementRef.nativeElement,'background-color','yellow')

  }

}
