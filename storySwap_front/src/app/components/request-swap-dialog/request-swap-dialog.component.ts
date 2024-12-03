import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-request-swap-dialog',
  standalone: true,
  imports: [],
  templateUrl: './request-swap-dialog.component.html',
  styleUrl: './request-swap-dialog.component.css'
})
export class RequestSwapDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RequestSwapDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar
  ) {}

  confirmRequest(address: string) {
    if (address) {
      this.snackBar.open('Exchange request sent!', 'Close', {
        duration: 3000, 
        panelClass: ['success-snackbar'], 
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      this.dialogRef.close();
    } else {
      this.snackBar.open('Please, enter your address', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar'], 
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}