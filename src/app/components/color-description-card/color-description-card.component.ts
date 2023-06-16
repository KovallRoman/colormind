import { Component, Input } from '@angular/core';
import { PaletteModel } from '../../models/palette.model';
import { ColorDescriptionCardModel } from '../../models/color-description-card-model';

@Component({
  selector: 'app-color-description-card',
  templateUrl: './color-description-card.component.html',
  styleUrls: ['./color-description-card.component.scss'],
})
export class ColorDescriptionCardComponent {
  @Input() palette!: PaletteModel;

  @Input() colorsUse!: ColorDescriptionCardModel;
}
