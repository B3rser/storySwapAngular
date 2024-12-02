import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WishItem } from '../interfaces/wish-item';

@Injectable({
  providedIn: 'root'
})
export class WishItemService {
  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/api/wish_list";
  private _wishItems: WishItem[] = [];

  constructor() { }

  get wishItems(): WishItem[] {
    return this._wishItems;
  }

  public fetchWishItems(): void {
    this.http.get<WishItem[]>(this.apiUrl).subscribe({
      next: (response) => {
        console.log('Wish items fetched:', response);
        this._wishItems = response;
      },
      error: (error) => {
        console.error('Error fetching wish items:', error);
      },
    });
  }

  public addWishItem(wishItem: WishItem): void {
    this.http.post<WishItem>(this.apiUrl, wishItem).subscribe({
      next: (response) => {
        console.log('Wish item added:', response);
        this._wishItems.push(response);
      },
      error: (error) => {
        console.error('Error adding wish item:', error);
      },
    });
  }

  public updateWishItem(id: string, updatedWishItem: WishItem): void {
    this.http.put<WishItem>(`${this.apiUrl}/${id}`, updatedWishItem).subscribe({
      next: (response) => {
        console.log('Wish item updated:', response);
        const index = this._wishItems.findIndex((item) => item.id === id);
        if (index > -1) {
          this._wishItems[index] = response;
        }
      },
      error: (error) => {
        console.error('Error updating wish item:', error);
      },
    });
  }

  public deleteWishItem(id: string): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        console.log('Wish item deleted');
        this._wishItems = this._wishItems.filter((item) => item.id !== id);
      },
      error: (error) => {
        console.error('Error deleting wish item:', error);
      },
    });
  }
}
