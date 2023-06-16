import { Component, Input } from '@angular/core';
import { PaletteModel } from '../../models/palette.model';
import { IconEnum } from '../../enums/icon.enum';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent {
  @Input() palette!: PaletteModel;

  description: {
    icon: IconEnum,
    title: string,
    text: string,
  }[] = [
    {
      icon: IconEnum.Dashboard,
      title: 'Bootstrap',
      text: 'Bootstrap is awesome, but the default styles tend to get a bit repetitive.Liven up your color design with the suggestions from Colormind.'
    },
    {
      icon: IconEnum.InvertColours,
      title: 'Colormind',
      text: 'Colormind has been trained on popular real-world user interfaces - we extract the background, text, branding and highlight colors for contextual awareness.'
    },
    {
      icon: IconEnum.Settings,
      title: 'Color Structure',
      text: 'The palette consists of a light color, a dark color, main brand color and two highlight colors. The main color is in the center of the palette and has the largest impact on the overall look.'
    },
  ];
}
