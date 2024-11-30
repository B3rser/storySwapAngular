import { Component } from '@angular/core';
import { RowBooksComponent } from '../../components/row-books/row-books.component';
import { MatButtonModule } from '@angular/material/button';
import { Title } from '@angular/platform-browser';
import { Book } from '../../interfaces/book';
import { BOOKS } from '../../books';

@Component({
  selector: 'home',
  standalone: true,
  imports: [RowBooksComponent, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Home');
  }
  public books: Book[] = BOOKS;
}
