import { Component, inject } from '@angular/core';
import { WishItem } from '../../interfaces/wish-item';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import { WishCardComponent } from '../../components/wish-card/wish-card.component';
import { Title } from '@angular/platform-browser';
import { WishItemService } from '../../services/wish-list.service';

@Component({
  selector: 'wishlist',
  standalone: true,
  imports: [MatCardModule, NgIf, NgFor, WishCardComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent {
  private wishItemService = inject(WishItemService);

  constructor(private titleService: Title) {
    this.titleService.setTitle('Wishlist');
  }

  public get wishItems(): WishItem[] {
    return this.wishItemService.wishItems;
  }

  public addToWishlist(wishData: WishItem) {
    
    this.wishItemService.addWishItem(wishData);
  }

  public removeFromWishlist(id: string){
    this.wishItemService.deleteWishItem(id);
  }
}
