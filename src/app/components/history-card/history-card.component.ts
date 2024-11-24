import { Component, Input } from '@angular/core';
/*import { HistoryItem } from '../../interfaces/history-item';*/
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'history-card',
  standalone: true,
  imports: [MatIconModule, MatCardModule, MatButtonModule, NgIf],
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.css',
})
export class HistoryCardComponent {
  /*@Input()
  /*public historyInfo: HistoryItem = {
    id: '',
    added_date: new Date(),
    id_book1: {
      id: '',
      title: '',
      image: '',
      score: -1,
      author: '',
      description: '',
      gender: '',
      release_date: Number,
    },
    id_book2: {
      id: '',
      title: '',
      image: '',
      score: -1,
      author: '',
      description: '',
      gender: '',
      release_date: Number,
    },
    id_user1: {
      id: '',
      name: '',
    },
    id_user2: {
      id: '',
      name: '',
    },
    type: '',
  };

  private currentUserID: String = '1';

  public getTitle(): String {
    if (
      this.historyInfo.id_book1.id === '' ||
      this.historyInfo.id_user1.id === '' ||
      this.historyInfo.id_user2.id === ''
    ) {
      return 'Something is wrong!!!!';
    }
    if (this.historyInfo.type === 'Swap') return 'Swap';
    if (
      this.historyInfo.type === 'Sale' &&
      this.historyInfo.id_user2.id === this.currentUserID
    ) {
      return 'Buy';
    }
    return 'Sale';
  }*/
}
