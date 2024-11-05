import { Component } from '@angular/core';
import { WishItem } from '../../interfaces/wish-item';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import { WishCardComponent } from '../../components/wish-card/wish-card.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'wishlist',
  standalone: true,
  imports: [MatCardModule, NgIf, NgFor, WishCardComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Wishlist');
  }
  wishItems: WishItem[] = [
    {
      id: '1',
      book: {
        id: '1',
        title: 'Frankenstein',
        image: 'https://www.magicmurals.com/media/amasty/webp/catalog/product/cache/155d73b570b90ded8a140526fcb8f2da/a/d/adg-0000001045_1_jpg.webp',
        score: 4.5,
        author: 'Mary Shelley',
        description: '',
        gender: '',
        release_date: new Date(),
      },
      date: new Date(),
    },
    {
      id: '2',
      book: {
        id: '2',
        title: '1984',
        image: 'https://m.media-amazon.com/images/I/51rXrmHv51L._SY445_SX342_.jpg',
        score: 4.5,
        author: 'George Orwell',
        description: '',
        gender: '',
        release_date: new Date(),
      },
      date: new Date(),
    },
    {
      id: '3',
      book: {
        id: '2',
        title: 'Moby Dick',
        image: 'https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg',
        score: 4.0,
        author: 'Herman Melville',
        description: '',
        gender: '',
        release_date: new Date(),
      },
      date: new Date(),
    },
  ];
}
