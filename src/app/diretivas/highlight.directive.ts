import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private _elementRef:ElementRef,private _render:Renderer2) { }

  @HostListener('mouseenter') onMouseOver(){
    this._render.setStyle(this._elementRef.nativeElement,'background-color','gray')
  }


  @HostListener('mouseleave') onMouseLeave(){
    this._render.setStyle(this._elementRef.nativeElement,'background-color','white')
  }


}
