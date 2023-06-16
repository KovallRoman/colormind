import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appHoverColor]',
})
export class HoverColorDirective {
  @Input('appHoverColor') color!: string;
  //
  // @HostListener('mouseenter', ['$event', '$event.target'])
  // onHover(event: any, target: any): void {
  //   console.log(event, target)
  // }

  constructor(
    private readonly renderer: Renderer2,
    private readonly elRef: ElementRef
  ) {
  }


  @HostListener('mouseenter')
  onHover(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'background', this.color);
  }

  @HostListener('mouseleave')
  onLeave(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'background', null);
  }
}

