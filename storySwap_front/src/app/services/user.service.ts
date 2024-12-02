import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/api/user";
  private _users: User[] = [];

  constructor() { }

  get users(): User[] {
    return this._users;
  }

  public fetchUsers(): void {
    this.http.get<User[]>(this.apiUrl).subscribe({
      next: (response) => {
        console.log('Users fetched:', response);
        this._users = response;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      },
    });
  }

  public addUser(user: User): void {
    this.http.post<User>(this.apiUrl, user).subscribe({
      next: (response) => {
        console.log('User added:', response);
        this._users.push(response);
      },
      error: (error) => {
        console.error('Error adding user:', error);
      },
    });
  }

  public updateUser(id: string, updatedUser: User): void {
    this.http.put<User>(`${this.apiUrl}/${id}`, updatedUser).subscribe({
      next: (response) => {
        console.log('User updated:', response);
        const index = this._users.findIndex((user) => user.id === id);
        if (index > -1) {
          this._users[index] = response;
        }
      },
      error: (error) => {
        console.error('Error updating user:', error);
      },
    });
  }

  public deleteUser(id: string): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        console.log('User deleted');
        this._users = this._users.filter((user) => user.id !== id);
      },
      error: (error) => {
        console.error('Error deleting user:', error);
      },
    });
  }
}
