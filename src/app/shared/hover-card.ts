import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverCard]',
  standalone: true,
})
export class HoverCardDirective {

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('mouseenter')
  onEnter() {
    this.el.nativeElement.style.transform = 'translateY(-4px)';
    this.el.nativeElement.style.boxShadow = '0 14px 32px rgba(0,0,0,0.14)';
  }

  @HostListener('mouseleave')
  onLeave() {
    this.el.nativeElement.style.transform = '';
    this.el.nativeElement.style.boxShadow = '';
  }

}