import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HistoryItem } from '../../interfaces/history-item';
import { HistoryCardComponent } from '../../components/history-card/history-card.component';
import { Title } from '@angular/platform-browser';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'history',
  standalone: true,
  imports: [NgIf, NgFor, HistoryCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent {
  private HistoryService = inject(HistoryService)

  constructor(private titleService: Title) {
    this.titleService.setTitle("History");
    this.HistoryService.fetchHistory();
  }

  public get historyItems(): HistoryItem[] {
    return this.HistoryService.historyItems;
  }
}
