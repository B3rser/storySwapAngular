import { Component, Input } from '@angular/core';
import { WishItem } from '../../interfaces/wish-item';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Book } from '../../interfaces/book';

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
    book: '',
    date: new Date(),
  };

  public book: Book = {
    _id: '',
    author: '',
    title: 'string',
    description: '',
    gender: '',
    image: '',
    release_date: -1,
    score: -1
  }
}
