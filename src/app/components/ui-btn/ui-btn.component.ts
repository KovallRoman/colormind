import { Component, Input } from '@angular/core';
import { PaletteModel } from '../../models/palette.model';

@Component({
  selector: 'app-ui-btn',
  templateUrl: 'ui-btn.component.html',
  styleUrls: ['ui-btn.component.scss'],
})
export class UiBtnComponent {
  @Input() palette!: PaletteModel;

  @Input() color!: string;

  @Input() text!: string;
}
