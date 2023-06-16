import { Component, Input } from '@angular/core';
import { PaletteModel } from '../../models/palette.model';
import { IconEnum } from '../../enums/icon.enum';

@Component({
  selector: 'app-Inputs',
  templateUrl: 'inputs.component.html',
  styleUrls: ['inputs.component.scss'],
})
export class InputsComponent {
  @Input() palette!: PaletteModel;
  IconEnum = IconEnum;
}
