import { Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';  // Importamos el servicio UserService
import { User } from '../../interfaces/user';  // Importamos la interfaz User
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'user-edit-dialog',
  standalone: true,
  imports: [
    MatIconModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    SelectButtonModule,
    FormsModule,
  ],
  templateUrl: './user-edit-dialog.component.html',
  styleUrls: ['./user-edit-dialog.component.css'],
})
export class UserEditDialogComponent {
  @Input()
  public userService: UserService = inject(UserService);

  public isVisible: boolean = false;

  user: User = {
    _id: '',
    name: '',
    last: '',
    address: '',
    email: '',
    type: 'Normal',
  };

  public typeOptions = [
    { label: 'Normal', value: 'Normal' },
    { label: 'Admin', value: 'Admin' },
  ];

  constructor() {
    
  }

  public showDialog(user: User) {
    this.user = { ...user };
    console.log(this.user)
    this.isVisible = true;
  }

  public closeDialog() {
    this.isVisible = false;
  }

  public saveUser() {
    this.userService.updateUser(this.user._id, this.user);
    this.closeDialog();
  }
}