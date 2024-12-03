import { Component, inject } from '@angular/core';
import { RowBooksComponent } from '../../components/row-books/row-books.component';
import { MatButtonModule } from '@angular/material/button';
import { Title } from '@angular/platform-browser';
import { Book } from '../../interfaces/book';
import { BookService } from '../../services/book.service';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'home',
  standalone: true,
  imports: [RowBooksComponent, MatButtonModule,  CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  images: string[] = [
    'assets/bannerEvent.png',
    'assets/bannerEvent1.png',
    'assets/bannerEvent2.png', 
  ];
  private bookService = inject(BookService);

  constructor(private titleService: Title) {
    this.titleService.setTitle('Home');
    this.bookService.fetchBooks();
  }

  public get books(): Book[] {
    return this.bookService.books;
  }

}
