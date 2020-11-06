import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[adHost]'
})
export class AdDirective {

  // Anchor element (ViewContainerRef) that specifies the location of this container in the containing view.
  constructor(public viewContainerRef: ViewContainerRef) {

  }

}
