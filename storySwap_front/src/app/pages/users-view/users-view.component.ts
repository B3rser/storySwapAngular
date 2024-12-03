import { Component, inject, ViewChild } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { Title } from '@angular/platform-browser';
import { NgFor, NgIf } from '@angular/common';
import { UserviewCardComponent } from "../../components/userview-card/userview-card.component";
import { UserEditDialogComponent } from "../../components/user-edit-dialog/user-edit-dialog.component";

@Component({
  selector: 'app-users-view',
  standalone: true,
  imports: [NgIf, NgFor, UserviewCardComponent, UserEditDialogComponent],
  templateUrl: './users-view.component.html',
  styleUrl: './users-view.component.css'
})
export class UsersViewComponent {
  @ViewChild(UserEditDialogComponent) editDialog!: UserEditDialogComponent;
  private userService = inject(UserService);
  private authService = inject(AuthService);
  private titleService = inject(Title);

  constructor() {
    this.titleService.setTitle('Users');
    this.userService.fetchUsers();
    this.authService.load_user(); 
  }

  public get users(): User[] {
    return this.userService.users;
  }

  public delete(id: string) {
    this.userService.deleteUser(id);
  }

  public edit(id: string, user: User) {
    if (this.editDialog) {
      this.editDialog.showDialog(user);
    }
  }
}