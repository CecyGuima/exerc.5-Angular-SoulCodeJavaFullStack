import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[btn-adicionar]'
})
export class BtnAdicionarDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) { 
    this.renderer.addClass(this.el.nativeElement, 'btn-adicionar')
  }
}
