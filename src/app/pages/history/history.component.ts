import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HistoryItem } from '../../interfaces/history-item';
import { HistoryCardComponent } from '../../components/history-card/history-card.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'history',
  standalone: true,
  imports: [ NgIf, NgFor, HistoryCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent {
  /*constructor(private titleService: Title){
    this.titleService.setTitle("History");
  }

  public historyItems: HistoryItem[] = [
    {
      id: '1',
      added_date: new Date(),
      id_book1: {
        id: '101',
        title: 'Frankenstein',
        image: 'https://www.magicmurals.com/media/amasty/webp/catalog/product/cache/155d73b570b90ded8a140526fcb8f2da/a/d/adg-0000001045_1_jpg.webp',
        score: 4.5,
        author: 'Mary Shelley',
        description: '',
        gender: '',
        release_date: new Date(),
      },
      id_book2: {
        id: '',
        title: '',
        image: '',
        score: -1,
        author: '',
        description: '',
        gender: '',
        release_date: new Date(),
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
        image: 'https://m.media-amazon.com/images/I/51IXWZzlgSL._SY445_SX342_.jpg',
        score: 4.8,
        author: 'Harper Lee',
        description: '',
        gender: '',
        release_date: new Date(),
      },
      id_book2: {
        id: '',
        title: '',
        image: '',
        score: -1,
        author: '',
        description: '',
        gender: '',
        release_date: new Date(),
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
        image: 'https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg',
        score: 4.0,
        author: 'Herman Melville',
        description: '',
        gender: '',
        release_date: new Date(),
      },
      id_book2: {
        id: '102',
        title: '1984',
        image: 'https://m.media-amazon.com/images/I/51rXrmHv51L._SY445_SX342_.jpg',
        score: 4.5,
        author: 'George Orwell',
        description: '',
        gender: '',
        release_date: new Date(),
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
  ];*/
}
