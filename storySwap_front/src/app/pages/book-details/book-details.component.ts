import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../interfaces/book';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgForOf } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { MatDialog } from '@angular/material/dialog';
import { UserCardsDialogComponent } from '../../components/user-cards-dialog/user-cards-dialog.component';
import { BookService } from '../../services/book.service';
import { BookUserService } from '../../services/user-book.service';
import { WishItemService } from '../../services/wish-list.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgForOf, ButtonComponent],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})

export class BookDetailsComponent implements OnInit {
  public book: Book = {
    id: '',
    author: '',
    title: '',
    description: '',
    gender: '',
    image: '',
    release_date: 0,
    score: 0
  };
  
  public stars: number[] = [];

  private bookService = inject(BookService);
  private bookUserService = inject(BookUserService);
  private wishItemService = inject(WishItemService);
  private authService = inject(AuthService);

  constructor(private route: ActivatedRoute, private dialog: MatDialog) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    if (id) {
      this.bookService.getBookById(id).subscribe({
        next: (book) => {
          this.book = book;
          this.generateStars();
        },
        error: (error) => {
          console.error('Error fetching book:', error);
        },
      });
    }
  }

  openUserCards(actionType: string) {
    const title = actionType === 'buy' ? 'Users Selling This Book' : 'Users Swapping This Book';

    // Filtrar transacciones según el tipo de acción
    // const bookTransactions = BOOKUSER.filter(
    //   transaction => transaction.id_book === this.book.id && transaction.type === actionType
    // );

    // Obtener datos de los usuarios correspondientes a las transacciones
    // const users = bookTransactions.map(transaction => {
    //   const user = USER.find(u => u.id === transaction.id_user);
    //   return {
    //     ...user,
    //     condition: transaction.condition,
    //     cost: actionType === 'buy' ? transaction.cost : null
    //   };
    // });

    // Abrir el diálogo
    // this.dialog.open(UserCardsDialogComponent, {
    //   data: {
    //     title,
    //     users,
    //   },
    //   width: '400px',
    // });
  }

  generateStars(): void {
    const fullStars = Math.floor(this.book.score);
    const halfStar = this.book.score % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    this.stars = [...Array(fullStars).fill(1), ...Array(halfStar).fill(0.5), ...Array(emptyStars).fill(0)];
  }
};
