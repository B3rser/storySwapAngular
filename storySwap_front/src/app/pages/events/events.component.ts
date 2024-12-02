import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EventService } from '../../services/event.service';
import { Event } from '../../interfaces/event';

@Component({
  selector: 'events',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  private eventService = inject(EventService);

  constructor(private titleService: Title) {
    this.titleService.setTitle('Events');
    this.eventService.fetchEvents();
  }

  public get events(): Event[] {
    return this.eventService.events;
  }

}
