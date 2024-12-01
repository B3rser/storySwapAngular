import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NotiCardComponent } from "../noti-card/noti-card.component";
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SwapThreeComponent } from '../swap-three/swap-three.component';

@Component({
  selector: 'app-dialog-noti',
  standalone: true,
  imports: [MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule, NotiCardComponent, NgFor],
  templateUrl: './dialog-noti.component.html',
  styleUrl: './dialog-noti.component.css'
})
export class DialogNotiComponent {
  notifications = [
    { id: 1, type: 1, user: 'John Doe' },
    { id: 2, type: 2, user: 'Jane Smith' },
    { id: 3, type: 3, user: 'Alice Johnson' },
  ];

  constructor(private router: Router, private dialog: MatDialog) {}

  onNotificationClick(notification: any) {
    
    if (notification.type === 1) {
      this.router.navigate(['/swap-two', { user: notification.user }]);
    } else if (notification.type === 2) {
      const dialogRef = this.dialog.open(SwapThreeComponent, {
        width: '300px',
        data: { user: notification.user },
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('Intercambio confirmado con', notification.user);
         
        } else {
          console.log('Intercambio cancelado');
        }
      });
    }
    
  }

}
