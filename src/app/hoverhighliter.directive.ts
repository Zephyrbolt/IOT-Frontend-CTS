import { style } from '@angular/animations';
import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appAnotherdirective]'
})
export class AnotherdirectiveDirective implements OnInit{

  @Input() mouseOn :string = ' green '
  @Input() mouseoff: string =' white'
  @HostBinding('style.backgroundColor') backgroundColor : string | undefined;

  constructor(private ref: ElementRef, private rendder: Renderer2) { }


  ngOnInit() {
  this.backgroundColor = this.mouseoff;
  }

  @HostListener('mouseenter') mouseover(eventdata :Event){
    this.backgroundColor = this.mouseOn;
  }
  @HostListener('mouseleave') mouseleave( eventdata : Event) {

    this.backgroundColor = this.mouseoff;
  }
}


