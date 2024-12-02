import { Component, Input } from '@angular/core';
import { HistoryItem } from '../../interfaces/history-item';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { Book } from '../../interfaces/book';
import { User } from '../../interfaces/user';

@Component({
  selector: 'history-card',
  standalone: true,
  imports: [MatIconModule, MatCardModule, MatButtonModule, NgIf],
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.css',
})
export class HistoryCardComponent {
  @Input()
  public historyInfo: HistoryItem = {
    id: '',
    added_date: new Date(),
    id_book1: '',
    id_book2: '',
    id_user1: '',
    id_user2: '',
    type: '',
  };

  public books: Book[] = [];
  public users: User[] = [];

  private currentUserID: String = '1';

  public getTitle(): String {
    if (
      this.books[0]._id === '' ||
      this.users[0]._id === '' ||
      this.users[1]._id === ''
    ) {
      return 'Something is wrong!!!!';
    }
    if (this.historyInfo.type === 'Swap') return 'Swap';
    if (
      this.historyInfo.type === 'Sale' &&
      this.users[1]._id === this.currentUserID
    ) {
      return 'Buy';
    }
    return 'Sale';
  }
}
