import { NgFor } from '@angular/common';
import { Component, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-filter-genres',
  standalone: true,
  imports: [NgFor],
  templateUrl: './filter-genres.component.html',
  styleUrl: './filter-genres.component.css'
})
export class FilterGenresComponent implements OnInit {
  public genres: string[] = [];

  private bookService = inject(BookService);

  @Output() genreSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit(): void {
    this.bookService.getGenres().subscribe({
      next: (genres) => {
        this.genres = ['All', ...genres];
        console.log(this.genres)  
      },
      error: (error) => {
        console.error('Error fetching genres:', error);
      },
    });
  }

  selectGenre(genre: string) {
    this.genreSelected.emit(genre);
  }

}
