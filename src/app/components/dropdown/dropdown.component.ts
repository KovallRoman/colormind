import { Component } from '@angular/core';
import { IconEnum } from '../../enums/icon.enum';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  isDropdownActive: boolean = false;
  IconEnum =IconEnum;

  onInputClick(): void {
    this.isDropdownActive = !this.isDropdownActive;
  }
}
