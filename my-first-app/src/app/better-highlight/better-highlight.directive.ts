import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor:string= 'transparent';
  @Input() highlightColor:string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string= this.defaultColor;
  @HostBinding('style.color') color: string;
  constructor(private elementRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor =this.defaultColor
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
   this.color = 'white';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.color = 'black';
    this.backgroundColor = this.defaultColor;
  }


}
