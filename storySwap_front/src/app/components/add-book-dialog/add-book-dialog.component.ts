import { Component, inject, input, Input, OnInit } from '@angular/core';
import { FloatingBtnComponent } from '../floating-btn/floating-btn.component';
import { MatIconModule } from '@angular/material/icon';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { BookUser } from '../../interfaces/book-user';
import { AuthService } from '../../services/auth.service';
import { BookUserService } from '../../services/user-book.service';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'add-book-dialog',
  standalone: true,
  imports: [
    FloatingBtnComponent,
    MatIconModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    SelectButtonModule,
    FormsModule,
  ],
  templateUrl: './add-book-dialog.component.html',
  styleUrl: './add-book-dialog.component.css',
})
export class AddBookDialogComponent implements OnInit {
  @Input()
  public bookService: BookService = inject(BookService);
  @Input()
  public userbookService: BookUserService = inject(BookUserService);
  @Input()
  public authService: AuthService = inject(AuthService);

  conditions = [
    { label: 'Good', value: 'Good' },
    { label: 'Fair', value: 'Fair' },
    { label: 'Poor', value: 'Poor' },
  ];

  public bookTitles: { label: string; value: string; }[] = [];
  public isVisible: boolean = false;

  constructor() {
    this.bookService.books.forEach((book: Book) => {
      var temp = { label: book.title, value: book._id }
      this.bookTitles.push(temp)
    });
  }

  ngOnInit(): void {
    this.bookService.books.forEach((book: Book) => {
      var temp = { label: book.title, value: book._id }
      this.bookTitles.push(temp)
    });
    console.log(this.bookService.books)
  }

  public selectionOptions = [{ label: 'For Sale', value: 'buy' }, { label: 'For Swap', value: 'swap' }]

  selectedBookTitle: string = '';
  selectedCondition: string = '';
  type: string = 'For Sale';
  cost: number = 0;
  score: number = 0;

  public fbtnStyle = {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
  };

  addBook() {
    const bookDetails: BookUser = {
      _id: "",
      add_date: new Date(),
      id_book: this.selectedBookTitle,
      id_user: this.authService.getUser()._id,
      state: "",
      condition: this.selectedCondition,
      type: this.type,
      cost: this.cost,
      // score: this.score,
    };

    console.log('Book Details:', bookDetails);
    this.userbookService.addBookUser(bookDetails);
    this.closeDialog();

    console.log(this.bookService.books)
  }

  public showDialog() {
    this.isVisible = true;
    console.log(this.authService.getUser()._id)
    
  }

  public closeDialog() {
    this.isVisible = false;
  }
}
