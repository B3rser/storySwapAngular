import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../interfaces/book';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgForOf, NgIf } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { MatDialog } from '@angular/material/dialog';
import { UserCardsDialogComponent } from '../../components/user-cards-dialog/user-cards-dialog.component';
import { BookService } from '../../services/book.service';
import { BookUserService } from '../../services/user-book.service';
import { WishItemService } from '../../services/wish-list.service';
import { AuthService } from '../../services/auth.service';
import { WishItem } from '../../interfaces/wish-item';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgForOf, ButtonComponent, NgIf],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})

export class BookDetailsComponent implements OnInit {
  public book: Book = {
    _id: '',
    author: '',
    title: '',
    description: '',
    gender: '',
    image: '',
    release_date: 0,
    score: 0
  };

  public wishData: WishItem = {
    _id: "",
    book: "",
    user: "",
    add_date: new Date()
  };

  public stars: number[] = [];

  private bookService = inject(BookService);
  private bookUserService = inject(BookUserService);
  private wishItemService = inject(WishItemService);
  private authService = inject(AuthService);
  private userService = inject(UserService);
  public isInWishlist = false;
  public dataLoaded = false;
  public isLogged = false;

  constructor(private route: ActivatedRoute, private dialog: MatDialog) {

  }

  async ngOnInit() {
    this.dataLoaded = true;
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    if (id) {
      this.bookService.getBookById(id).subscribe({
        next: (book) => {
          this.book = book;
          this.generateStars();
          this.wishItemService
            .getbyUserBookIds(this.authService.getUser()._id, this.book._id)
            .subscribe({
              next: (wish) => {
                this.wishData = wish;
                this.isInWishlist = !!this.wishData?._id;
                console.log(wish._id);
                console.log(this.isInWishlist);
              },
              error: (error) => {
                console.error('Error fetching wish item:', error);
              },
            });
          this.bookService.fetchBooks()
          this.authService.load_user()
          this.bookUserService.fetchAllBookUsers()
          if(this.authService.isLoggedIn()){
            this.isLogged = true
          }
        },
        error: (error) => {
          console.error('Error fetching book:', error);
        },
      });
    }
    this.authService.load_user()
  }

  openUserCards(actionType: string) {
    let title: string;
    const res = actionType === "buy" 
    if (res) {
      title = 'Users Selling This Book';
    } else {
      title = 'Users Swapping This Book';
    }

    const bookTransactions = this.bookUserService.bookUsers.filter(
      transaction => transaction.id_book === this.book._id && transaction.type === actionType
    );

    const users = bookTransactions.map(transaction => {
      const user = this.userService.users.find(u => u._id === transaction.id_user);
      console.log(user)
      return {
        ...user,
        condition: transaction.condition,
        cost: actionType === 'buy' ? transaction.cost : null
      };
    });

    this.dialog.open(UserCardsDialogComponent, {
      data: {
        title,
        users,
        actionType
      },
      width: '400px',
    });
  }

  generateStars(): void {
    const fullStars = Math.floor(this.book.score);
    const halfStar = this.book.score % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    this.stars = [...Array(fullStars).fill(1), ...Array(halfStar).fill(0.5), ...Array(emptyStars).fill(0)];
  }

  public manageWishlist() {
    if (this.isInWishlist && this.wishData?._id) {
      this.wishItemService.deleteWishItem(this.wishData._id);
      this.isInWishlist = false;
      console.log(this.wishData);
    } else {
      console.log(this.wishData);

      const newWishItem: WishItem = {
        _id: "",
        book: this.book._id,
        user: this.authService.getUser()._id,
        add_date: new Date(Date.now())
      };

      this.wishItemService.addWishItem(newWishItem).subscribe({
        next: (wish) => {
          console.log(wish)
          this.wishData = wish;
          this.isInWishlist = true;
        },
        error: (error) => {
          console.error('Error fetching book:', error);
        },
      });
    }
  }
};
