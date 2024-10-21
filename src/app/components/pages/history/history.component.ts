import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HistoryItem } from '../../../interfaces/history-item';
import { HistoryCardComponent } from '../../history-card/history-card.component';

@Component({
  selector: 'history',
  standalone: true,
  imports: [ NgIf, NgFor, HistoryCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent {
  public historyItems: HistoryItem[] = [
    {
      id: '1',
      added_date: new Date(),
      id_book1: {
        id: '101',
        title: 'Frankenstein',
        img: 'https://www.magicmurals.com/media/amasty/webp/catalog/product/cache/155d73b570b90ded8a140526fcb8f2da/a/d/adg-0000001045_1_jpg.webp',
        rating: 4.5,
        author: 'Mary Shelley',
      },
      id_book2: {
        id: '',
        title: '',
        img: '',
        rating: -1,
        author: '',
      },
      id_user1: {
        id: '1',
        name: 'Pamis',
      },
      id_user2: {
        id: '2',
        name: 'Uriel',
      },
      type: 'Sale',
    },
    {
      id: '3',
      added_date: new Date(),
      id_book1: {
        id: '104',
        title: 'To Kill a Mockingbird',
        img: 'https://m.media-amazon.com/images/I/51IXWZzlgSL._SY445_SX342_.jpg',
        rating: 4.8,
        author: 'Harper Lee',
      },
      id_book2: {
        id: '',
        title: '',
        img: '',
        rating: -1,
        author: '',
      },
      id_user1: {
        id: '2',
        name: 'Uriel',
      },
      id_user2: {
        id: '1',
        name: 'Pamis',
      },  
      type: 'Sale',
    },
    {
      id: '2',
      added_date: new Date(),
      id_book1: {
        id: '103',
        title: 'Moby Dick',
        img: 'https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg',
        rating: 4.0,
        author: 'Herman Melville',
      },
      id_book2: {
        id: '102',
        title: '1984',
        img: 'https://m.media-amazon.com/images/I/51rXrmHv51L._SY445_SX342_.jpg',
        rating: 4.5,
        author: 'George Orwell',
      },
      id_user1: {
        id: '1',
        name: 'Pamis',
      },
      id_user2: {
        id: '2',
        name: 'Uriel',
      },
      type: 'Swap',
    },
  ];
}
