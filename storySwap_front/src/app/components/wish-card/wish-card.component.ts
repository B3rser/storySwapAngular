import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    _id: '',
    book: '',
    user: '',
    add_date: new Date(),
  };

  constructor(){
  }
  @Input()
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

  @Output() removeWish = new EventEmitter<string>();

  public onRemoveClick(): void {
    this.removeWish.emit(this.wishInfo._id);
  }

  get formattedDate(): string {
    const date = new Date(this.wishInfo.add_date);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
