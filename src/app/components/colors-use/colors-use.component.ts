import { Component, Input } from '@angular/core';
import { PaletteModel } from '../../models/palette.model';
import { ColorDescriptionCardModel } from '../../models/color-description-card-model';
import { PaletteColorEnum } from '../../enums/palette-color.enum';

@Component({
  selector: 'app-colors-use',
  templateUrl: './colors-use.component.html',
  styleUrls: ['./colors-use.component.scss'],
})
export class ColorsUseComponent {
  @Input() palette!: PaletteModel;

  lightShades: ColorDescriptionCardModel = {
    color: PaletteColorEnum.LightShades,
    title: 'Light shades',
    text: 'Use this color as the background for your dark-on-light designs, or the text color of an inverted design.',
    isColorTextDefault: true
  }

  lightAccent: ColorDescriptionCardModel = {
    color: PaletteColorEnum.LightAccent,
    title: 'Light accent',
    text: 'Accent colors can be used to bring attention to design elements by contrasting with the rest of the palette.',
  }

  mainColor: ColorDescriptionCardModel = {
    color: PaletteColorEnum.MainColor,
    title: 'Main brand color',
    text: 'This color should be eye-catching but not harsh. It can be liberally applied to your layout as its main identity.',
  }

  darkAccent: ColorDescriptionCardModel = {
    color: PaletteColorEnum.DarkAccent,
    title: 'Dark accent',
    text: 'Another accent color to consider. Not all colors have to be used - sometimes a simple color scheme works best.',
  }

  darkShades: ColorDescriptionCardModel = {
    color: PaletteColorEnum.DarkShades,
    title: 'Dark shades',
    text: 'Use as the text color for dark-on-light designs, or as the background for inverted designs.',
  }
}
