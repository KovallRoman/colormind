import { Component, Input } from '@angular/core';
import { PaletteModel } from '../../models/palette.model';
import { IconEnum } from '../../enums/icon.enum';

@Component({
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.scss'],
})
export class NavBarComponent {
  @Input() palette!: PaletteModel;
  IconEnum = IconEnum;

  // onHoverItem(event: MouseEvent): void {
  //   this.renderer.setStyle(event.target, 'background', this.palette.mainColor);
  //   // (event.target as HTMLElement).style.background = this.palette.mainColor;
  // }
  //
  // onBlurItem(event: MouseEvent): void {
  //   this.renderer.setStyle(event.target, 'background', null)
  //   // (event.target as HTMLElement).style.background = '';
  // }
}
