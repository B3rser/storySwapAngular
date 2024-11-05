import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarMenuComponent } from '../nav-bar-menu/nav-bar-menu.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'side-bar-menu',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavBarMenuComponent,
    MatIconModule
  ],
  templateUrl: './side-bar-menu.component.html',
  styleUrl: './side-bar-menu.component.css',
})
export class SideBarMenuComponent {
  public buttonMenu: any = {
    width: '100%',
    borderRadius: '10px',
    color: 'black',
    justifyContent: 'flex-start',
  };

  showFiller = false;
}
