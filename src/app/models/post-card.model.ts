import { PaletteModel } from './palette.model';

export interface PostCardModel {
  headImg?: string;
  subtitleIcon?: string;
  subtitle?: string;
  title?: string;
  description?: string;
  button?: string;
  backgroundColor: keyof PaletteModel;
  imageBackgroundColor?: keyof PaletteModel;
  iconFill?: keyof PaletteModel;
  titleCategoryColor?: keyof PaletteModel;
  titleColor?: keyof PaletteModel;
  descriptionColor?: keyof PaletteModel;
}
