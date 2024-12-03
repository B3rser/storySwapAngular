import { Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarMenuComponent } from '../nav-bar-menu/nav-bar-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { DialogNotiComponent } from '../dialog-noti/dialog-noti.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';

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
    MatIconModule,
    NgIf
  ],
  templateUrl: './side-bar-menu.component.html',
  styleUrl: './side-bar-menu.component.css',
})
export class SideBarMenuComponent {
  private auth = inject(AuthService);
  public buttonMenu: any = {
    width: '100%',
    borderRadius: '10px',
    color: 'black',
    justifyContent: 'flex-start',
  };

  @ViewChild('drawer') drawer!: MatDrawer;

  showFiller = false;
  public islogin(){
    return this.auth.isLoggedIn(); 
  }

  public get user(){
    return this.auth.getUser();
  }
  constructor(private dialog: MatDialog) {}

  openNotifications() {
    this.dialog.open(DialogNotiComponent, {
      width: '400px',
    });
  }

  public logout(){
    this.auth.removeToken();
    this.auth.removeUser();
    if (this.drawer.opened) {
      this.drawer.close(); 
    }
  }  
}
