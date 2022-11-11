import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  
  private LoginStatus$ = new BehaviorSubject(false);
  public isLoggedIn = this.LoginStatus$.asObservable();


  login() {
    this.LoginStatus$.next(true);
    return true;
  }

  logout() {
    this.LoginStatus$.next(false);
    return false;
  }

}
