import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../interfaces/book';
import { BookComponent } from '../../components/book/book.component';
import { NgFor } from '@angular/common';
import { BOOKS } from '../../books';
import { FilterGenresComponent } from '../../components/filter-genres/filter-genres.component';


@Component({
  selector: 'app-items',
  standalone: true,
  imports: [BookComponent, NgFor, FilterGenresComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})

export class ItemsComponent implements OnInit {

  books: Book[] = BOOKS; 
  filteredBooks: Book[] = BOOKS; 

  constructor() {}

  ngOnInit(): void {}

  onGenreSelected(genre: string) {
    this.filteredBooks = this.books.filter(book => book.gender === genre);
  }
}
