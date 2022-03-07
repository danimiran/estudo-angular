import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgIfDirective {

@Input() set ngElse(condition: boolean){ //escutar todo vez que for modificado
  if(!condition){
    this._viewContainerRef.createEmbeddedView(this._templeteRef); //para reenderizar a view
  } else{
    this._viewContainerRef.clear(); //para limpar
  }
}
  constructor( private _templeteRef: TemplateRef<any>, private _viewContainerRef: ViewContainerRef) { }

}
