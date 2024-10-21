import { Component } from '@angular/core';
import { WishItem } from '../../../interfaces/wish-item';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'wishlist',
  standalone: true,
  imports: [MatCardModule, NgIf, NgFor, MatIconModule,MatButtonModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent {
  wishItems: WishItem[] = [
    {
      book: {
        title: 'Frankenstein',
        img: 'https://www.magicmurals.com/media/amasty/webp/catalog/product/cache/155d73b570b90ded8a140526fcb8f2da/a/d/adg-0000001045_1_jpg.webp',
        rating: 4.5,
        author: 'Mary Shelley',
      },
      date: new Date(),
    },
    {
      book: {
        title: '1984',
        img: 'https://m.media-amazon.com/images/I/51rXrmHv51L._SY445_SX342_.jpg',
        rating: 4.5,
        author: 'George Orwell',
      },
      date: new Date(),
    },
    {
      book: {
        title: 'Moby Dick',
        img: 'https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg',
        rating: 4.0,
        author: 'Herman Melville',
      },
      date: new Date(),
    },
  ];
}
