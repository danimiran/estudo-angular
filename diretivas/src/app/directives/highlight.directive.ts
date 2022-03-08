import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver() {

    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave() {

    this.backgroundColor = this.defaultColor;
  }
  
  @HostBinding('style.backgroundColor') backgroundColor?: string; //permite que faça a associação de uma class a uma variavel

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';

  constructor() { }

  ngOnInit()
  {
    this.backgroundColor = this.defaultColor;
  }

}