import { Component, Input, OnInit } from '@angular/core';
import { ColorHttpService } from '../../services/colormind-http.service';
import { PaletteModel } from '../../models/palette.model';
import { PostCardModel } from '../../models/post-card.model';
import { PaletteColorEnum } from '../../enums/palette-color.enum';
import { IconEnum } from '../../enums/icon.enum';

@Component({
  selector: 'app-colormind',
  templateUrl: './colormind.component.html',
  styleUrls: ['./colormind.component.scss']
})

export class ColorComponent implements OnInit {
  colorResponse: PaletteModel = {
    lightShades: '#F9F7F7',
    lightAccent: '#9DCBD9',
    mainColor: '#34C1D4',
    darkAccent: '#E28DA1',
    darkShades: '#414768',
  };

  @Input() appearance: string = 'border';

  constructor(
    private colorHttpService: ColorHttpService
  ) {
  }

  ngOnInit(): void {
    this.colorPost();
  }

  onGenerateClick(): void {
    this.colorPost();
  }

  private colorPost() {
    this.colorHttpService
      .postColormind()
      .subscribe((palette) => {
        this.colorResponse = palette;
      });
  }

  postCardOne: PostCardModel = {
    headImg: '/assets/img/png/seascape.png',
    subtitle: 'Cards',
    description: 'Cards are a part of the material design guidelines, but beyond that they are easy to use and look great on desktop and mobile.',
    imageBackgroundColor: PaletteColorEnum.MainColor,
    backgroundColor: PaletteColorEnum.LightShades,
    titleCategoryColor: PaletteColorEnum.MainColor,
    descriptionColor: PaletteColorEnum.DarkShades,
  }

  postCardTwo: PostCardModel = {
    subtitleIcon: IconEnum.Newspaper,
    subtitle: 'Accent',
    description: 'Accent colors should be used sparingly to draw attention to important design elements. Overuse of accent colors can make your design look haphazard.',
    button: 'string',
    backgroundColor: PaletteColorEnum.DarkAccent,
    iconFill: PaletteColorEnum.LightShades,
    titleCategoryColor: PaletteColorEnum.LightShades,
    descriptionColor: PaletteColorEnum.LightShades,
  }

  postCardThree: PostCardModel = {
    subtitleIcon: IconEnum.Visibility,
    subtitle: 'Color examples',
    title: 'Applying a color palette is an interpretive art. This page might give you some ideas.',
    backgroundColor: PaletteColorEnum.LightShades,
    iconFill: PaletteColorEnum.MainColor,
    titleCategoryColor: PaletteColorEnum.MainColor,
    titleColor: PaletteColorEnum.DarkShades,
  }

  postCardFour: PostCardModel = {
    headImg: '/assets/img/png/pattern.png',
    subtitle: 'Backgrounds',
    title: 'Be subtle',
    description: 'Layer colors with an abstract design or subtle background pattern. Patterns load a lot faster than images and can support retina resolutions automatically via SVG.',
    backgroundColor: PaletteColorEnum.LightShades,
    imageBackgroundColor: PaletteColorEnum.LightAccent,
    titleCategoryColor: PaletteColorEnum.MainColor,
    titleColor: PaletteColorEnum.DarkShades,
    descriptionColor: PaletteColorEnum.DarkShades,
  }

  postCardFive: PostCardModel = {
    headImg: '/assets/img/png/typewriter.png',
    subtitleIcon: IconEnum.PermMedia,
    subtitle: 'Creative blending',
    title: 'Incorporate colors in your graphics',
    description: 'Colors look more natural when blended into shadows and gradients',
    backgroundColor: PaletteColorEnum.LightShades,
    imageBackgroundColor: PaletteColorEnum.MainColor,
    iconFill: PaletteColorEnum.MainColor,
    titleCategoryColor: PaletteColorEnum.MainColor,
    titleColor: PaletteColorEnum.DarkShades,
    descriptionColor: PaletteColorEnum.DarkShades,
  }

  postCardSik: PostCardModel = {
    subtitleIcon: IconEnum.Twitter,
    subtitle: 'Twitter',
    title: 'A shade of the dark color can be used for differentiation, or to provide more contrast.' +
      'of the dark color can be used for differentiation, or to provide more contrast.' +
      'be used for differentiation, or to provide more contrast.',
    backgroundColor: PaletteColorEnum.DarkShades,
    iconFill: PaletteColorEnum.LightShades,
    titleCategoryColor: PaletteColorEnum.LightShades,
    titleColor: PaletteColorEnum.LightShades,
    descriptionColor: PaletteColorEnum.LightShades,
  }

  cardOne: PostCardModel = {
    headImg: '/assets/img/png/cloud.png',
    subtitle: 'Cards',
    description: ' Cards layout with a dark on light theme. Combine photos, text and inverted cards.',
    imageBackgroundColor: PaletteColorEnum.DarkAccent,
    backgroundColor: PaletteColorEnum.LightShades,
    titleCategoryColor: PaletteColorEnum.MainColor,
    descriptionColor: PaletteColorEnum.DarkShades,
  }

  cardTwo: PostCardModel = {
    subtitleIcon: IconEnum.Twitter,
    subtitle: 'Twitter',
    title: 'Use inverted cards to grab attention',
    backgroundColor: PaletteColorEnum.DarkAccent,
    iconFill: PaletteColorEnum.LightShades,
    titleCategoryColor: PaletteColorEnum.LightShades,
    titleColor: PaletteColorEnum.LightShades,
  }

  cardThree: PostCardModel = {
    headImg: '/assets/img/png/balloon.png',
    subtitle: 'Balloon',
    title: 'Color photos',
    description: 'Color manipulation of photos is a quick way to add interest and reinforce the color scheme.',
    imageBackgroundColor: PaletteColorEnum.LightAccent,
    backgroundColor: PaletteColorEnum.LightShades,
    titleCategoryColor: PaletteColorEnum.MainColor,
    titleColor: PaletteColorEnum.DarkShades,
    descriptionColor: PaletteColorEnum.DarkShades,
  }

  cardFour: PostCardModel = {
    headImg: '/assets/img/png/cup.png',
    subtitleIcon: IconEnum.TrendingUp,
    subtitle: 'Relax',
    title: 'Colors should be fun, not stressful. Have a cup of coffee',
    iconFill: PaletteColorEnum.MainColor,
    backgroundColor: PaletteColorEnum.LightShades,
    imageBackgroundColor: PaletteColorEnum.LightAccent,
    titleCategoryColor: PaletteColorEnum.MainColor,
    titleColor: PaletteColorEnum.DarkShades,
  }

  cardFive: PostCardModel = {
    subtitleIcon: IconEnum.Newspaper,
    subtitle: 'Another accent card',
    title: 'Have some lorem ipsum',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan lorem at dignissim aliquet.\n' +
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    button: 'string',
    backgroundColor: PaletteColorEnum.DarkAccent,
    iconFill: PaletteColorEnum.LightShades,
    titleCategoryColor: PaletteColorEnum.LightShades,
    titleColor: PaletteColorEnum.LightShades,
    descriptionColor: PaletteColorEnum.LightShades,
  }
}
