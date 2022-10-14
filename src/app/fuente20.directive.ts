import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFuente20]'
})
export class Fuente20Directive {

  constructor(
    private elemento: ElementRef
  )
  { 
    elemento.nativeElement.style.fontSize = '20px'
  }

}
