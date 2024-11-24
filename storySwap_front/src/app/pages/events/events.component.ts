import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'events',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Events');
  }
}
