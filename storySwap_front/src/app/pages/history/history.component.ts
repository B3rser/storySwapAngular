import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HistoryItem } from '../../interfaces/history-item';
import { HistoryCardComponent } from '../../components/history-card/history-card.component';
import { Title } from '@angular/platform-browser';
import { HistoryService } from '../../services/history.service';
import { AuthService } from '../../services/auth.service';
import { BookService } from '../../services/book.service';
import { UserService } from '../../services/user.service';
import { Book } from '../../interfaces/book';
import { User } from '../../interfaces/user';

@Component({
  selector: 'history',
  standalone: true,
  imports: [NgIf, NgFor, HistoryCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent {
  private authService = inject(AuthService)
  private HistoryService = inject(HistoryService)
  private bookService = inject(BookService)
  private userService = inject(UserService)

  constructor(private titleService: Title) {
    this.titleService.setTitle("History");
    this.HistoryService.fetchHistory(this.authService.getUser()._id);
    this.bookService.fetchBooks();
    this.userService.fetchUsers();
    this.authService.load_user();
  }

  public get historyItems(): HistoryItem[] {
    return this.HistoryService.historyItems;
  }

  public get books(): Book[] {
    return this.bookService.books;
  }

  public get users(): User[] {
    return this.userService.users;
  }

  public getBooks(idBook1: string, idBook2: string): Book[] {
    const book1 = this.books.find(book => book._id === idBook1) || {
      _id: '',
      author: '',
      title: 'Not Found',
      description: '',
      gender: '',
      image: '',
      release_date: -1,
      score: -1
    };

    const book2 = this.books.find(book => book._id === idBook2) || {
      _id: '',
      author: '',
      title: 'Not Found',
      description: '',
      gender: '',
      image: '',
      release_date: -1,
      score: -1
    };

    return [book1, book2];
  }

  public getUsers(userId1: string, userId2: string): User[] {
    const user1 = this.users.find(user => user._id === userId1) || {
      _id: '',
      name: '',
      last: '',
      address: '',
      email: '',
      type: ''
    };
  
    const user2 = this.users.find(user => user._id === userId2) || {
      _id: '',
      name: '',
      last: '',
      address: '',
      email: '',
      type: ''
    };
  
    return [user1, user2];
  }
}
