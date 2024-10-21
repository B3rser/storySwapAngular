import { Component, Input } from '@angular/core';
import { WishItem } from '../../interfaces/wish-item';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'wish-card',
  standalone: true,
  imports: [MatIcon, MatCardModule, MatButtonModule],
  templateUrl: './wish-card.component.html',
  styleUrl: './wish-card.component.css',
})
export class WishCardComponent {
  @Input()
  public wishInfo: WishItem = {
    id: '',
    book: {
      id: '',
      title: '',
      img: '',
      rating:-1,
      author: '',
    },
    date: new Date(),
  };
}
