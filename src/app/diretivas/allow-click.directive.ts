import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[allowClick]'
})
export class AllowClickDirective {

  private  _allowedRoles:string[]  = ['ROLE_ADMIN']

  private _canAccess = false;

  constructor(private _elementRef:ElementRef,private _render:Renderer2) { }

  @HostListener('mouseenter') onMouseOver(){
    // this._render.setStyle(this._elementRef.nativeElement,'background-color','gray')
  }


  applyAcess(){
    if(!this._canAccess)
      this._render.setAttribute(this._elementRef.nativeElement,'disabled',"true")
  }

  @Input()
  set allowClick(alowedRoles:Array<string>){
    this._canAccess = this._allowedRoles.some(role => alowedRoles.includes(role));
    console.log("_canAcess",this._canAccess)
    this.applyAcess();
  }




}
