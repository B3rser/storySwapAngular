import { Component,  Input, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgFor, NgIf],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})

export class BookComponent implements OnInit {
  @Input() book!: Book;  
  stars: number[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.book && this.book.score) {
      this.stars = Array(Math.round(this.book.score));  
    }
  }

  goToDetails() {
    this.router.navigate(['/book-details', this.book.title]);
  }
}
