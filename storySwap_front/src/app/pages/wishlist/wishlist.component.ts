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
      book: "",
      date: new Date(),
    },
    {
      id: '2',
      book: "",
      date: new Date(),
    },
    {
      id: '3',
      book: "",
      date: new Date(),
    },
  ];
}
