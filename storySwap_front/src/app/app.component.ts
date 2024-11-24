import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarMenuComponent } from './components/nav-bar-menu/nav-bar-menu.component';
import { SideBarMenuComponent } from './components/side-bar-menu/side-bar-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavBarMenuComponent,
    SideBarMenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'storySwap';
}
