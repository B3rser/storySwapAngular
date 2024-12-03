import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'library-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgIf, RouterModule],
  templateUrl: './library-card.component.html',
  styleUrl: './library-card.component.css'
})
export class LibraryCardComponent {
  @Input() book: Book = {
    _id: '',
    author: '',
    title: '',
    description: '',
    gender: '',
    image: '',
    release_date: -1,
    score: -1
  };

  @Output() delete = new EventEmitter<void>(); 
  @Output() edit = new EventEmitter<void>(); 

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit();
  }

  onEdit() {
    this.edit.emit();
  }
}
