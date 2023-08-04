import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[allowClick]'
})
export class AllowClickDirective {

  private  _allowedRoles:string[]  = ['ROLE_ADMIN']

  private _canAccess = false;

  static cont = 1;

  constructor(private _elementRef:ElementRef,private _render:Renderer2) { }

  @HostListener('mouseenter') onMouseOver(){
    // this._render.setStyle(this._elementRef.nativeElement,'background-color','gray')
  }


  applyAcess(){
    if(!this._canAccess)
      this._render.setAttribute(this._elementRef.nativeElement,'disabled',"true")
  }

  @Input()
  set allowClick(roles:Array<string>){
    console.log("roles",roles)
    this._canAccess = this._allowedRoles.some(allowRole => roles.includes(allowRole.toUpperCase()));
    console.log("_canAcess",this._canAccess)
    console.log("const",AllowClickDirective.cont)
    this.applyAcess();
    AllowClickDirective.cont++
  }




}
