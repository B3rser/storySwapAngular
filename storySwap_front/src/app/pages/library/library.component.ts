import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Book } from '../../interfaces/book';
// import { AddBookCatalogDialogComponent } from '../../components/add-book-catalog-dialog/add-book-catalog-dialog.component';
import { AddBookDialogComponent } from '../../components/add-book-dialog/add-book-dialog.component';
import { BookUserService } from '../../services/user-book.service';
import { BookUser } from '../../interfaces/book-user';
import { BookService } from '../../services/book.service';
import { AuthService } from '../../services/auth.service';
import { LibraryCardComponent } from "../../components/library-card/library-card.component";

@Component({
  selector: 'library',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    // AddBookCatalogDialogComponent,
    AddBookDialogComponent,
    LibraryCardComponent
],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css',
})
export class LibraryComponent implements OnInit{
  protected authService = inject(AuthService);
  protected bookService = inject(BookService);
  protected userbookService = inject(BookUserService);

  dataLoaded = false;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Library');
  }
  
  async ngOnInit(){
    await Promise.all([
      this.bookService.fetchBooks(),
      this.authService.load_user(),
      this.userbookService.fetchBookUsers(this.authService.getUser()._id)
    ]);
    
    this.dataLoaded = true;
  }

  public get bookUsers(): BookUser[] {
    return this.userbookService.bookUsers;
  }

  public get books(): Book[] {
    return this.bookService.books;
  }

  public getBookById(bookId: string): Book {
    return this.books.find(book => book._id === bookId) || {
      _id: '',
      author: '',
      title: 'Not Found',
      description: '',
      gender: '',
      image: '',
      release_date: -1,
      score: -1
    };
  }

  public deleteUserBook(id: string) {
    this.userbookService.deleteBookUser(id);
  }

  public editUserBook(id: string, bookUser: BookUser) {
    this.userbookService.updateBookUser(id, bookUser);
  }
}
