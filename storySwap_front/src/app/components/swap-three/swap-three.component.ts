import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-swap-three',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './swap-three.component.html',
  styleUrl: './swap-three.component.css'
})
export class SwapThreeComponent {
  constructor(
    public dialogRef: MatDialogRef<SwapThreeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: string }
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

}
