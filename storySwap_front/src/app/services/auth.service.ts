import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private TOKEN_KEY: string = 'auth-token';
  private http = inject(HttpClient);

  private _user: User = {
    _id: '',
    name: '',
    last: '',
    address: '',
    email: '',
    type: ''
  };
  private apiUrl: string = 'http://localhost:8080/api/auth/';

  constructor() {
    if (this.getToken())
      this.getUserInfo();
  }

  public saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY) || '';
  }

  public removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  public removeUser(): void {
    this._user = { 
      _id: '',
      name: '',
      last: '',
      address: '',
      email: '',
      type: ''
    };
  }

  public login(email: string, password: string): Observable<any> {
    return this.http.post<{ token: string; user: any }>(this.apiUrl + "login", { email, password }).pipe(
      tap(response => {
        this.saveToken(response.token);
        this._user = response.user;
        console.log(this._user)
      })
    );
  }

  public register(
    name: string,
    last: string,
    email: string,
    password: string,
    address: string = ''
  ): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}register`, {
      name,
      last,
      email,
      password,
      address
    }).pipe(
      tap(response => {
        // if (response.token) {
        //   this.saveToken(response.token);
        // }
        this._user = response.user;
        console.log('Registered user:', this._user);
      })
    );
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }

  public getUser(): User {
    return this._user;
  }

  public getUserInfo(): void {
    const token = this.getToken();
    if (!token) {
      console.error('No token found');
      return;
    }

    const headers = new HttpHeaders({
      Authorization: token
    });

    this.http.get<User>(`${this.apiUrl}me`, { headers }).subscribe({
      next: (userInfo) => {
        this._user = userInfo;
        console.log('User Info Loaded:', this._user);
      },
      error: (err) => {
        console.error('Error fetching user info:', err);
      }
    });
  }
}
