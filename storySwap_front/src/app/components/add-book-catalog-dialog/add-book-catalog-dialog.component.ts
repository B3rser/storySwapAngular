import { Component, Input, NgModule, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatingBtnComponent } from '../floating-btn/floating-btn.component';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-book-catalog-dialog',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    FloatingBtnComponent,
    DropdownModule,
    RadioButtonModule,
    FormsModule
  ],
  templateUrl: './add-book-catalog-dialog.component.html',
  styleUrl: './add-book-catalog-dialog.component.css',
})
export class AddBookCatalogDialogComponent {
  public isVisible: boolean = false;

  public fbtnStyle = {
    position: 'fixed',
    width: 'auto',
    bottom: '10px',
    left: '10px',
  };

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

  selectedBookTitle: string = '';
  selectedCondition: string = '';
  type: string = 'For Sale';
  cost: number = 0;
  score: number = 0;

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
