import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HistoryItem } from '../../interfaces/history-item';
import { HistoryCardComponent } from '../../components/history-card/history-card.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'history',
  standalone: true,
  imports: [NgIf, NgFor, HistoryCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle("History");
  }

  public historyItems: HistoryItem[] = [
    {
      id: '1',
      added_date: new Date(),
      id_book1: "",
      id_book2: "",
      id_user1: "",
      id_user2: "",
      type: 'Sale',
    },
    {
      id: '3',
      added_date: new Date(),
      id_book1: "",
      id_book2: "",
      id_user1: "",
      id_user2: "",
      type: 'Sale',
    },
    {
      id: '2',
      added_date: new Date(),
      id_book1: "",
      id_book2: "",
      id_user1: "",
      id_user2: "",
      type: 'Swap',
    },
  ];
}
