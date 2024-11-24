import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'nav-bar-menu',
  standalone: true,
  imports: [
    ButtonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './nav-bar-menu.component.html',
  styleUrl: './nav-bar-menu.component.css'
})
export class NavBarMenuComponent {

}
