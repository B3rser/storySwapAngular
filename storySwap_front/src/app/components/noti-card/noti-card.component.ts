import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-noti-card',
  standalone: true,
  imports: [MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule, NgIf],
  templateUrl: './noti-card.component.html',
  styleUrl: './noti-card.component.css'
})
export class NotiCardComponent {
  @Input() senderName!: string; 
  @Input() type!: number;
}
