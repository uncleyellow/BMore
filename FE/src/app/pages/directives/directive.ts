import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = '';
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
 }
}
