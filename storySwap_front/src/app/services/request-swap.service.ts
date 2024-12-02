import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestSwap } from '../interfaces/request-swap';

@Injectable({
  providedIn: 'root'
})
export class RequestSwapService {
  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/api/request_swap";
  private _requests: RequestSwap[] = [];

  constructor() { }

  get requests(): RequestSwap[] {
    return this._requests;
  }

  public fetchRequests(): void {
    this.http.get<RequestSwap[]>(this.apiUrl).subscribe({
      next: (response) => {
        console.log('Request swaps fetched:', response);
        this._requests = response;
      },
      error: (error) => {
        console.error('Error fetching request swaps:', error);
      },
    });
  }

  public addRequest(request: RequestSwap): void {
    this.http.post<RequestSwap>(this.apiUrl, request).subscribe({
      next: (response) => {
        console.log('Request swap added:', response);
        this._requests.push(response);
      },
      error: (error) => {
        console.error('Error adding request swap:', error);
      },
    });
  }

  public updateRequest(id: string, updatedRequest: RequestSwap): void {
    this.http.put<RequestSwap>(`${this.apiUrl}/${id}`, updatedRequest).subscribe({
      next: (response) => {
        console.log('Request swap updated:', response);
        const index = this._requests.findIndex((request) => request.id === id);
        if (index > -1) {
          this._requests[index] = response;
        }
      },
      error: (error) => {
        console.error('Error updating request swap:', error);
      },
    });
  }

  public deleteRequest(id: string): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        console.log('Request swap deleted');
        this._requests = this._requests.filter((request) => request.id !== id);
      },
      error: (error) => {
        console.error('Error deleting request swap:', error);
      },
    });
  }
}
