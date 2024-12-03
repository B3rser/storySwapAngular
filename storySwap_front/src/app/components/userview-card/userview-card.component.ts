import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { User } from '../../interfaces/user';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'userview-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './userview-card.component.html',
  styleUrl: './userview-card.component.css'
})
export class UserviewCardComponent {
  @Input() userInfo: User = {
    _id: '',
    name: '',
    last: '',
    address: '',
    email: '',
    type: ''
  };
  @Output () edit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  constructor() {}

  onEdit(): void {
    this.edit.emit(this.userInfo._id);
  }

  onDelete(): void {
    this.delete.emit(this.userInfo._id);
  }
}
