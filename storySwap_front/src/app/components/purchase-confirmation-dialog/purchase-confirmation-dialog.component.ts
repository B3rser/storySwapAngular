import { NgFor } from '@angular/common';
import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-purchase-confirmation-dialog',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './purchase-confirmation-dialog.component.html',
  styleUrl: './purchase-confirmation-dialog.component.css'
})

export class PurchaseConfirmationDialogComponent {
  selectedPaymentMethod: string | null = null;
  paymentOptions = ['Credit Card', 'PayPal', 'Google Pay'];

  constructor(
    public dialogRef: MatDialogRef<PurchaseConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar
  ) {}

  confirmPurchase() {
    if (this.selectedPaymentMethod) {
      this.snackBar.open('Your book is on the way', 'Close', {
        duration: 3000, 
        panelClass: ['success-snackbar'], 
      });
      this.dialogRef.close();
    } else {
      this.snackBar.open('Please select a payment option', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar'],
      });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}