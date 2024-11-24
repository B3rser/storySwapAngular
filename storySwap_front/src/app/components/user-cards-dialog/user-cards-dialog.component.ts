import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { PurchaseConfirmationDialogComponent } from '../purchase-confirmation-dialog/purchase-confirmation-dialog.component';
import { NgFor } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { RequestSwapDialogComponent } from '../request-swap-dialog/request-swap-dialog.component';

@Component({
  selector: 'app-user-cards-dialog',
  standalone: true,
  imports: [UserCardComponent, NgFor, MatDialogModule],
  templateUrl: './user-cards-dialog.component.html',
  styleUrl: './user-cards-dialog.component.css'
})
export class UserCardsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UserCardsDialogComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; users: any[]; actionType: string }
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  openPurchaseConfirmation(user: any, actionType: string) {
    console.log("Opening purchase confirmation for user:", actionType);
    if (actionType === 'buy') {
      this.dialogRef.close(); 
      this.dialog.open(PurchaseConfirmationDialogComponent, {
        data: { user },
        width: '400px',
      });
    }else{
      this.dialogRef.close(); 
      this.dialog.open(RequestSwapDialogComponent, {
        data: { user },
        width: '400px',
      });
    }
  }
}


