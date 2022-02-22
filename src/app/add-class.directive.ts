import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAddClass]'
})
export class AddClassDirective {

  constructor(private element: ElementRef) { }


  @Input('appAddClass') set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
  
}
