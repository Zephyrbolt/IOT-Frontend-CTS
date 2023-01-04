import { Directive , OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective implements OnInit {

  constructor(private elref : ElementRef,private render : Renderer2) { }

  ngOnInit(){
    this.render.setStyle(this.elref.nativeElement, 'background-color' , 'white')

  }
}
