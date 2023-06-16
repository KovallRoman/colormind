import { Component, Input } from '@angular/core';
import { PaletteModel } from '../../models/palette.model';
import { PostCardModel } from '../../models/post-card.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})

export class PostComponent {
  @Input() palette!: PaletteModel;

  @Input() post!: PostCardModel;

  @Input() appearance: string = 'border';
}
