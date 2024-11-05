import { NgFor } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-genres',
  standalone: true,
  imports: [NgFor],
  templateUrl: './filter-genres.component.html',
  styleUrl: './filter-genres.component.css'
})
export class FilterGenresComponent {

  genres: string[] = ['Dystopia', 'Fantasy', 'Horror', 'Romance', 'Fiction', 'Mystery'];

  @Output() genreSelected: EventEmitter<string> = new EventEmitter<string>();

  selectGenre(genre: string) {
    this.genreSelected.emit(genre);
  }

}
