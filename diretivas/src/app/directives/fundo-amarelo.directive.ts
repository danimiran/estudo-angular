import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]', //caso queira que seja aplicada a apenas um elemento coloco o nome da tag p[fundoAmarelo]
})
export class FundoAmareloDirective {
  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    console.log(_elementRef); //para saber o que tem dentro
    
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow' - angular fala para não usar;


    //boa pratica
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }
}
