import { Component, Input } from '@angular/core';
import { PaletteModel } from '../../models/palette.model';
import { IconEnum } from '../../enums/icon.enum';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.scss'],
})
export class TabsComponent {
  @Input() palette!: PaletteModel;
  toggle = true;
  IconEnum = IconEnum;

  enableDisableRule() {
    this.toggle = !this.toggle;
  }
}
