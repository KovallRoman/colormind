import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-card',
  templateUrl: './color-card.component.html',
  styleUrls: ['./color-card.component.scss'],
})
export class ColorCardComponent {
  @Input() color!: string;
}
