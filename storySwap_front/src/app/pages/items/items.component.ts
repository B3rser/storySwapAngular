import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book';
import { NgFor } from '@angular/common';
import { FilterGenresComponent } from '../../components/filter-genres/filter-genres.component';
import { BookService } from '../../services/book.service';
import { Title } from '@angular/platform-browser';
import { BookCardComponent } from "../../components/book-card/book-card.component";


@Component({
  selector: 'app-items',
  standalone: true,
  imports: [NgFor, FilterGenresComponent, BookCardComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})

export class ItemsComponent implements OnInit {
  private BookService = inject(BookService)

  constructor(private titleService: Title) {
    this.titleService.setTitle('Search');
    this.BookService.fetchBooks();
  }

  ngOnInit(): void {}

  public get books(): Book[] {
    return this.BookService.books;
  }

  public onGenreSelected(genre: string) {
    return this.BookService.filterByGenre(genre);
  }
}
