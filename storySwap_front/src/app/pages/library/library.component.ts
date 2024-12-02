import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Book } from '../../interfaces/book';
import { AddBookCatalogDialogComponent } from '../../components/add-book-catalog-dialog/add-book-catalog-dialog.component';
import { AddBookDialogComponent } from '../../components/add-book-dialog/add-book-dialog.component';
import { BookCardComponent } from '../../components/book-card/book-card.component';
import { BookUserService } from '../../services/user-book.service';
import { BookUser } from '../../interfaces/book-user';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'library',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    AddBookCatalogDialogComponent,
    AddBookDialogComponent,
    BookCardComponent
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css',
})
export class LibraryComponent {
  private bookUserService = inject(BookUserService);
  private bookService = inject(BookService);

  constructor(private titleService: Title) {
    this.titleService.setTitle('Library');
    this.bookUserService.fetchBookUsers();
  }

  public get bookUsers(): BookUser[] {
    return this.bookUserService.bookUsers;
  }

  public books: Book[] = [];
}
