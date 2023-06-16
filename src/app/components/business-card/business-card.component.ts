import { Component, Input } from '@angular/core';
import { PaletteModel } from '../../models/palette.model';
import { IconEnum } from '../../enums/icon.enum';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss'],
})
export class BusinessCardComponent {
  @Input() palette!: PaletteModel;
  IconEnum = IconEnum;
}
