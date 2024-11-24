import { NgFor } from '@angular/common';
import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

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
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  confirmPurchase() {
    if (this.selectedPaymentMethod) {
      alert('Tu libro está en camino');
      this.dialogRef.close();
    } else {
      alert('Por favor, selecciona una opción de pago');
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
