import { Component } from '@angular/core';
import { WishItem } from '../../../interfaces/wish-item';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import { WishCardComponent } from "../../wish-card/wish-card.component";

@Component({
  selector: 'wishlist',
  standalone: true,
  imports: [MatCardModule, NgIf, NgFor, WishCardComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent {
  
  wishItems: WishItem[] = [
    {
      id: "1",
      book: {
        id: "1",
        title: 'Frankenstein',
        img: 'https://www.magicmurals.com/media/amasty/webp/catalog/product/cache/155d73b570b90ded8a140526fcb8f2da/a/d/adg-0000001045_1_jpg.webp',
        rating: 4.5,
        author: 'Mary Shelley',
      },
      date: new Date(),
    },
    {
      id: "2",
      book: {
        id: "2",
        title: '1984',
        img: 'https://m.media-amazon.com/images/I/51rXrmHv51L._SY445_SX342_.jpg',
        rating: 4.5,
        author: 'George Orwell',
      },
      date: new Date(),
    },
    {
      id: "3",
      book: {
        id: "2",
        title: 'Moby Dick',
        img: 'https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg',
        rating: 4.0,
        author: 'Herman Melville',
      },
      date: new Date(),
    },
  ];
}
