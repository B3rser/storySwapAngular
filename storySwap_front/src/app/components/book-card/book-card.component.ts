import { Component, Input } from '@angular/core';
import { Book } from '../../interfaces/book';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'book-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgFor, NgIf, RouterModule, RouterLinkActive],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css',
})

export class BookCardComponent {
  @Input() book!: Book;
  stars: number[] = [];

  constructor() { }

  ngOnInit() {
    if (this.book && this.book.score) {
      this.stars = Array(Math.round(this.book.score));
    }
  }

  // goToDetails() {
  //   this.router.navigate(['/book-details', this.book.id]);
  // }
}
