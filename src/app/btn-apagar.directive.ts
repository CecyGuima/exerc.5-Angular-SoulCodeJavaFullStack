import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[btn-apagar]'
})
export class BtnApagarDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) { 
    this.renderer.addClass(this.el.nativeElement, 'btn-apagar')
  }
}
