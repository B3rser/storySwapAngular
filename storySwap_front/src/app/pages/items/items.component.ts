import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book';
import { BookComponent } from '../../components/book/book.component';
import { NgFor } from '@angular/common';
import { FilterGenresComponent } from '../../components/filter-genres/filter-genres.component';
import { BookService } from '../../services/book.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-items',
  standalone: true,
  imports: [BookComponent, NgFor, FilterGenresComponent],
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
