import { PaletteModel } from './palette.model';

export interface ColorDescriptionCardModel {
  color: keyof PaletteModel;
  title: string;
  text: string;
  isColorTextDefault?: boolean;
}
