import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../interfaces/book';
import { Observable, Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/api/book";
  private _books: Book[] = [];
  private _filterBooks: Book[] = [];
  private _genres: string[] = [];

  constructor() { }

  get books(): Book[] {
    return this._filterBooks;
  }

  get genres(): string[] {
    return this._genres;
  }

  public fetchBooks(): void {
    this.http.get<Book[]>(this.apiUrl).subscribe({
      next: (response) => {
        // console.log('Books fetched:', response);
        this._books = response;
        this._filterBooks = response;
      },
      error: (error) => {
        console.error('Error fetching books:', error);
      },
    });
  }

  public getBookById(id: string): Observable<Book> {
    const subject = new Subject<Book>();

    this.http.get<Book>(`${this.apiUrl}/${id}`).subscribe({
      next: (response) => {
        subject.next(response);
        subject.complete();
      },
      error: (error) => {
        console.error('Error fetching book:', error);
        subject.error(error);
      },
    });

    return subject.asObservable();
  }

  public addBook(book: Book): void {
    this.http.post<Book>(this.apiUrl, book).subscribe({
      next: (response) => {
        console.log('Book added:', response);
        this._books.push(response);
        this._filterBooks = this._books;
      },
      error: (error) => {
        console.error('Error adding book:', error);
      },
    });
  }

  public updateBook(id: string, updatedBook: Book): void {
    this.http.put<Book>(`${this.apiUrl}/${id}`, updatedBook).subscribe({
      next: (response) => {
        console.log('Book updated:', response);
        const index = this._books.findIndex((book) => book._id === id);
        if (index > -1) {
          this._books[index] = response;
        }
        this._filterBooks = this._books;
      },
      error: (error) => {
        console.error('Error updating book:', error);
      },
    });
  }

  public deleteBook(id: string): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        console.log('Book deleted');
        this._books = this._books.filter((book) => book._id !== id);
        this._filterBooks = this._books;
      },
      error: (error) => {
        console.error('Error deleting book:', error);
      },
    });
  }

  public filterByGenre(genre: string) {
    if (genre == "All")
      this._filterBooks = this._books;
    else
      this._filterBooks = this._books.filter(book => book.gender === genre);
  }

  public getGenres(): Observable<string[]> {
    const subject = new Subject<string[]>();

    this.http.get<string[]>(`${this.apiUrl}/genres`).subscribe({
      next: (response) => {
        this._genres = response;
        subject.next(response);
        subject.complete();
      },
      error: (error) => {
        console.error('Error fetching genres:', error);
        subject.error(error);
      }
    });

    return subject.asObservable();
  }
}