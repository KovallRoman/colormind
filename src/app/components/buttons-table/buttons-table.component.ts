import { Component, Input } from '@angular/core';
import { PaletteModel } from '../../models/palette.model';
import { IconEnum } from '../../enums/icon.enum';

@Component({
  selector: 'app-button-table',
  templateUrl: 'buttons-table.component.html',
  styleUrls: ['buttons-table.component.scss'],
})
export class ButtonsTableComponent {
  @Input() palette!: PaletteModel;
  IconEnum = IconEnum;
}
