import { Component, Input } from '@angular/core';
import { PaletteModel } from '../../models/palette.model';

@Component({
  selector: 'app-color-semantics',
  templateUrl: './color-semantics.component.html',
  styleUrls: ['./color-semantics.component.scss'],
})
export class ColorSemanticsComponent {
  @Input() palette!: PaletteModel;
}
