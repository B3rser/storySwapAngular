import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userId: string = "6693287bd4ff9723592d3b01";
  constructor() { }

  public get userId(): string {
    return this._userId;
  }
}
