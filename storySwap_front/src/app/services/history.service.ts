import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistoryItem } from '../interfaces/history-item';
import { BookService } from './book.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private http = inject(HttpClient);
  private bookService = inject(BookService);
  private userService = inject(UserService);

  private apiUrl = "http://localhost:8080/api/history";
  private _history: HistoryItem[] = [];

  constructor() { }

  get historyItems(): HistoryItem[] {
    return this._history;
  }

  public fetchHistory(idUser: String): void {
    this.http.get<HistoryItem[]>(this.apiUrl).subscribe({
      next: (response) => {
        console.log('History fetched:', response);
        this._history = response.filter(
          (item) => item.id_user1 === idUser || item.id_user2 === idUser
        );

        // const bookIds = [
        //   ...new Set(this._history.flatMap(item => [item.id_book1, item.id_book2]))
        // ];
        // const userIds = [
        //   ...new Set(this._history.flatMap(item => [item.id_user1, item.id_user2]))
        // ];
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
        const index = this._history.findIndex((item) => item._id === id);
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
        this._history = this._history.filter((item) => item._id !== id);
      },
      error: (error) => {
        console.error('Error deleting history item:', error);
      },
    });
  }
}
