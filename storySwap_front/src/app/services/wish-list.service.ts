import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WishItem } from '../interfaces/wish-item';
import { Observable, Subject } from 'rxjs';

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

  public fetchWishItems(idUser: String): void {
    const url = `${this.apiUrl}?userId=${idUser}`;

    this.http.get<WishItem[]>(url).subscribe({
      next: (response) => {
        console.log('Wish items fetched:', response);
        this._wishItems = response;
      },
      error: (error) => {
        console.error('Error fetching wish items:', error);
      },
    });
  }

  public getbyUserBookIds(idUser: String, idBook: String): Observable<WishItem> {
    const subject = new Subject<WishItem>();

    this.http.get<WishItem>(`${this.apiUrl}/${idUser}/${idBook}`).subscribe({
      next: (response) => {
        console.log(idUser)
        subject.next(response);
        subject.complete();
      },
      error: (error) => {
        console.error('Error fetching wish items:', error);
        subject.error(error);
      },
    });

    return subject.asObservable();
  }

  public addWishItem(wishItem: WishItem): Observable<WishItem> {
    const subject = new Subject<WishItem>();

    this.http.post<WishItem>(this.apiUrl, wishItem).subscribe({
      next: (response) => {
        subject.next(response);
        subject.complete();
      },
      error: (error) => {
        subject.error(error);
      },
    });


    return subject.asObservable();
  }

  public updateWishItem(id: String, updatedWishItem: WishItem): void {
    this.http.put<WishItem>(`${this.apiUrl}/${id}`, updatedWishItem).subscribe({
      next: (response) => {
        console.log('Wish item updated:', response);
        const index = this._wishItems.findIndex((item) => item._id === id);
        if (index > -1) {
          this._wishItems[index] = response;
        }
      },
      error: (error) => {
        console.error('Error updating wish item:', error);
      },
    });
  }

  public deleteWishItem(id: String): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        console.log('Wish item deleted');
        this._wishItems = this._wishItems.filter((item) => item._id !== id);
      },
      error: (error) => {
        console.error('Error deleting wish item:', error);
      },
    });
  }
}
