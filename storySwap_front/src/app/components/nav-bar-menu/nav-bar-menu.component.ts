import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'nav-bar-menu',
  standalone: true,
  imports: [
    ButtonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    NgIf,
    CommonModule
  ],
  templateUrl: './nav-bar-menu.component.html',
  styleUrl: './nav-bar-menu.component.css'
})
export class NavBarMenuComponent {
  private auth = inject(AuthService);

  constructor() {
  }
}
