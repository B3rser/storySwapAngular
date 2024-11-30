import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../interfaces/book';
import { BOOKS } from '../../books';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgForOf, NgIf } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { BOOKUSER } from '../../books-users';
import { USER } from '../../users';
import { MatDialog } from '@angular/material/dialog';
import { UserCardsDialogComponent } from '../../components/user-cards-dialog/user-cards-dialog.component';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgForOf, ButtonComponent],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})

export class BookDetailsComponent implements OnInit {
  book!: Book;
  stars: number[] = [];

  constructor(private route: ActivatedRoute, private dialog: MatDialog) {}

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this.book = BOOKS.find(book => book.title === title)!;
    this.generateStars();
  }

  openUserCards(actionType: string) {
    const title = actionType === 'buy' ? 'Users Selling This Book' : 'Users Swapping This Book';

    // Filtrar transacciones según el tipo de acción
    const bookTransactions = BOOKUSER.filter(
      transaction => transaction.id_book === this.book.id && transaction.type === actionType
    );

    // Obtener datos de los usuarios correspondientes a las transacciones
    const users = bookTransactions.map(transaction => {
      const user = USER.find(u => u.id === transaction.id_user);
      return {
        ...user,
        condition: transaction.condition,
        cost: actionType === 'buy' ? transaction.cost : null
      };
    });

    // Abrir el diálogo
    this.dialog.open(UserCardsDialogComponent, {
      data: {
        title,
        users,
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
};
