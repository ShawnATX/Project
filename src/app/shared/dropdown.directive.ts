//adds and removes the 'Open' css class to my dropdowns when it is clicked


import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen(){
      this.isOpen = !this.isOpen;
  }
}