import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../interfaces/book';
import { BOOKS } from '../../books';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgForOf, NgIf } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgIf, NgForOf, ButtonComponent],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})

export class BookDetailsComponent implements OnInit {
  book!: Book;
  stars: number[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this.book = BOOKS.find(book => book.title === title)!;

    this.generateStars();
  }

  generateStars(): void {
    const fullStars = Math.floor(this.book.score);
    const halfStar = this.book.score % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar; 

    this.stars = [...Array(fullStars).fill(1), ...Array(halfStar).fill(0.5), ...Array(emptyStars).fill(0)];
  }
  onBuy(): void {
    console.log('Buying the book:', this.book.title);
  }

  onAddToWishlist(): void {
    console.log('Adding to wishlist:', this.book.title);
  }
}
