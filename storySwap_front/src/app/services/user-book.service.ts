import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookUser } from '../interfaces/book-user';

@Injectable({
  providedIn: 'root'
})
export class BookUserService {
  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/api/user_book";
  private _bookUsers: BookUser[] = [];

  constructor() { }

  get bookUsers(): BookUser[] {
    return this._bookUsers;
  }

  public fetchBookUsers(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.get<BookUser[]>(this.apiUrl).subscribe({
        next: (response) => {
          this._bookUsers = response.filter((item) => item.id_user === id);
          console.log('Book users fetched:', this._bookUsers);
          resolve();
        },
        error: (error) => {
          console.error('Error fetching book users:', error);
          reject(error);
        },
      });
    });
  }

  public addBookUser(bookUser: BookUser): void {
    this.http.post<BookUser>(this.apiUrl, bookUser).subscribe({
      next: (response) => {
        console.log('Book user added:', response);
        this._bookUsers.push(response);
      },
      error: (error) => {
        console.error('Error adding book user:', error);
      },
    });
  }

  public updateBookUser(id: string, updatedBookUser: BookUser): void {
    this.http.put<BookUser>(`${this.apiUrl}/${id}`, updatedBookUser).subscribe({
      next: (response) => {
        console.log('Book user updated:', response);
        const index = this._bookUsers.findIndex((bookUser) => bookUser._id === id);
        if (index > -1) {
          this._bookUsers[index] = response;
        }
      },
      error: (error) => {
        console.error('Error updating book user:', error);
      },
    });
  }

  public deleteBookUser(id: string): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        console.log('Book user deleted');
        this._bookUsers = this._bookUsers.filter((bookUser) => bookUser._id !== id);
      },
      error: (error) => {
        console.error('Error deleting book user:', error);
      },
    });
  }
}
