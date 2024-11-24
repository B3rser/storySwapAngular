import { NgIf } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user: any;
  @Output() userClicked = new EventEmitter<any>();

  onCardClick() {
    this.userClicked.emit(this.user);
    console.log("User card clicked:", this.user);
  }
}

