import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Book } from '../../interfaces/book';
import { AddBookCatalogDialogComponent } from '../../components/add-book-catalog-dialog/add-book-catalog-dialog.component';
import { AddBookDialogComponent } from '../../components/add-book-dialog/add-book-dialog.component';

@Component({
  selector: 'library',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    AddBookCatalogDialogComponent,
    AddBookDialogComponent,
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css',
})
export class LibraryComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Library');
  }

  public books: Book[] = [];
}
