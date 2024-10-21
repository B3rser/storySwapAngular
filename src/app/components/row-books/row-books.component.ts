import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Book } from '../../interfaces/book';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'row-books',
  standalone: true,
  imports: [NgFor, MatCardModule, BookCardComponent],
  templateUrl: './row-books.component.html',
  styleUrl: './row-books.component.css',
})
export class RowBooksComponent {
  @Input()
  public books: Book[] = [];
  @Input()
  public title: string = '';

  public logMessage() {
    console.log('Hello');
  }
}
