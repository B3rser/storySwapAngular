import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistoryItem } from '../interfaces/history-item';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/api/history";
  private _history: HistoryItem[] = [];

  constructor() { }

  get historyItems(): HistoryItem[] {
    return this._history;
  }

  public fetchHistory(): void {
    this.http.get<HistoryItem[]>(this.apiUrl).subscribe({
      next: (response) => {
        console.log('History fetched:', response);
        this._history = response;
      },
      error: (error) => {
        console.error('Error fetching history:', error);
      },
    });
  }

  public addHistory(historyItem: HistoryItem): void {
    this.http.post<HistoryItem>(this.apiUrl, historyItem).subscribe({
      next: (response) => {
        console.log('History item added:', response);
        this._history.push(response);
      },
      error: (error) => {
        console.error('Error adding history item:', error);
      },
    });
  }

  public updateHistory(id: string, updatedHistory: HistoryItem): void {
    this.http.put<HistoryItem>(`${this.apiUrl}/${id}`, updatedHistory).subscribe({
      next: (response) => {
        console.log('History item updated:', response);
        const index = this._history.findIndex((item) => item.id === id);
        if (index > -1) {
          this._history[index] = response;
        }
      },
      error: (error) => {
        console.error('Error updating history item:', error);
      },
    });
  }

  public deleteHistory(id: string): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        console.log('History item deleted');
        this._history = this._history.filter((item) => item.id !== id);
      },
      error: (error) => {
        console.error('Error deleting history item:', error);
      },
    });
  }
}
