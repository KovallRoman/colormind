import { Component, Input } from '@angular/core';
import { PaletteModel } from '../../models/palette.model';

@Component({
  selector: 'app-ui-components',
  templateUrl: 'ui-components.component.html',
  styleUrls: ['ui-components.component.scss'],
})
export class UiComponentsComponent {
  @Input() palette!: PaletteModel;
}
