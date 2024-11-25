import { Component } from '@angular/core';
import { FloatingBtnComponent } from '../floating-btn/floating-btn.component';
import { MatIconModule } from '@angular/material/icon';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-book-dialog',
  standalone: true,
  imports: [
    FloatingBtnComponent,
    MatIconModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    SelectButtonModule,
    FormsModule,
  ],
  templateUrl: './add-book-dialog.component.html',
  styleUrl: './add-book-dialog.component.css',
})
export class AddBookDialogComponent {
  public isVisible: boolean = true;

  bookTitles = [
    { label: 'Book 1', value: 'Book 1' },
    { label: 'Book 2', value: 'Book 2' },
    { label: 'Book 3', value: 'Book 3' },
  ];

  conditions = [
    { label: 'New', value: 'New' },
    { label: 'Good', value: 'Good' },
    { label: 'Fair', value: 'Fair' },
    { label: 'Poor', value: 'Poor' },
  ];

  public selectionOptions = [{ label: 'For Sale', value: 'sale' },{ label: 'For Swap', value: 'swap' }]

  selectedBookTitle: string = '';
  selectedCondition: string = '';
  type: string = 'For Sale';
  cost: number = 0;
  score: number = 0;

  public fbtnStyle = {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
  };

  addBook() {
    const bookDetails = {
      title: this.selectedBookTitle,
      condition: this.selectedCondition,
      type: this.type,
      cost: this.cost,
      score: this.score,
    };

    console.log('Book Details:', bookDetails);

    this.closeDialog();
  }

  public showDialog() {
    this.isVisible = true;
  }

  public closeDialog() {
    this.isVisible = false;
  }
}
