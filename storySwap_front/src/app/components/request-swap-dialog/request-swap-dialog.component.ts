import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

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
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  confirmRequest(address:String) {
    if (address != null) {
      alert('Tu libro está en camino');
      this.dialogRef.close();
    } else {
      alert('Please, enter your address');
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
