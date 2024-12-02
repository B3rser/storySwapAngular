import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/api/event";

  private _events: Event[] = [];

  constructor() { }

  get events(): Event[] {
    return this._events;
  }

  public fetchEvents(): void {
    this.http.get<Event[]>(this.apiUrl).subscribe({
      next: (response) => {
        console.log('Events fetched:', response);
        this._events = response;
      },
      error: (error) => {
        console.error('Error fetching events:', error);
      },
    });
  }

  public addEvent(event: Event): void {
    this.http.post<Event>(this.apiUrl, event).subscribe({
      next: (response) => {
        console.log('Event added:', response);
        this._events.push(response);
      },
      error: (error) => {
        console.error('Error adding event:', error);
      },
    });
  }

  public updateEvent(id: string, updatedEvent: Event): void {
    this.http.put<Event>(`${this.apiUrl}/${id}`, updatedEvent).subscribe({
      next: (response) => {
        console.log('Event updated:', response);
        const index = this._events.findIndex((event) => event.id === id);
        if (index > -1) {
          this._events[index] = response;
        }
      },
      error: (error) => {
        console.error('Error updating event:', error);
      },
    });
  }

  public deleteEvent(id: string): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        console.log('Event deleted');
        this._events = this._events.filter((event) => event.id !== id);
      },
      error: (error) => {
        console.error('Error deleting event:', error);
      },
    });
  }
}
