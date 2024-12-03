import { Component, inject, Output } from '@angular/core';
import { WishItem } from '../../interfaces/wish-item';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import { WishCardComponent } from '../../components/wish-card/wish-card.component';
import { Title } from '@angular/platform-browser';
import { WishItemService } from '../../services/wish-list.service';
import { AuthService } from '../../services/auth.service';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'wishlist',
  standalone: true,
  imports: [MatCardModule, NgIf, NgFor, WishCardComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent {
  private authService = inject(AuthService)
  private wishItemService = inject(WishItemService);
  private bookService = inject(BookService);

  constructor(private titleService: Title) {
    this.titleService.setTitle('Wishlist');
    this.wishItemService.fetchWishItems(this.authService.getUser()._id)
    this.bookService.fetchBooks()
    this.authService.load_user();
    console.log(this.wishItems);
  }
  
  public get wishItems(): WishItem[] {
    return this.wishItemService.wishItems;
  }

  public get books(): Book[] {
    return this.bookService.books;
  }

  public getBookById(bookId: string): Book {
    return this.books.find(book => book._id === bookId) || {
      _id: '',
      author: '',
      title: 'Not Found',
      description: '',
      gender: '',
      image: '',
      release_date: -1,
      score: -1
    };
  }

  public removeFromWishlist(id: string){
    this.wishItemService.deleteWishItem(id);
  }
}
