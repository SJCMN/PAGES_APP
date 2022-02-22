import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAddClass]'
})
export class AddClassDirective {

  constructor(private element: ElementRef) { 
    this.element.nativeElement.style.backgroundColor= "orange";
    console.log('AddClass used!');

  }
  
}
