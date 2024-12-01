import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../interfaces/book';
//import { environment } from '../../environments/environment'; // Ruta puede variar

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = "/api/book";

  private _books: Book[] = []; 

  constructor(private http: HttpClient) {}

  get books(): Book[] {
    return this._books;
  }

  public fetchBooks(): void {
    this.http.get<Book[]>(this.apiUrl).subscribe({
      next: (response) => {
        console.log('Libros obtenidos:', response);
        this._books = response; 
      },
      error: (error) => {
        console.error('Error al obtener libros:', error);
      },
    });
  }

  public addBook(book: Book): void {
    this.http.post<Book>(this.apiUrl, book).subscribe({
      next: (response) => {
        console.log('Libro agregado:', response);
        this._books.push(response); 
      },
      error: (error) => {
        console.error('Error al agregar libro:', error);
      },
    });
  }

  public updateBook(id: string, updatedBook: Book): void {
    this.http.put<Book>(`${this.apiUrl}/${id}`, updatedBook).subscribe({
      next: (response) => {
        console.log('Libro actualizado:', response);
        const index = this._books.findIndex((book) => book.id === id); 
        if (index > -1) {
          this._books[index] = response; 
        }
      },
      error: (error) => {
        console.error('Error al actualizar libro:', error);
      },
    });
  }

  public deleteBook(id: string): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        console.log('Libro eliminado');
        this._books = this._books.filter((book) => book.id !== id); 
      },
      error: (error) => {
        console.error('Error al eliminar libro:', error);
      },
    });
  }
}
