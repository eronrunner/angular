import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {
  @Input() toggle: boolean = false;
  @HostBinding('class.none')
  isToggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('onchange')
  change() {
    this.isToggle = this.toggle;
  }

}
