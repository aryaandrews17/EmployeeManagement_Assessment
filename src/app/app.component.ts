import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from './login/authorization.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private log: LoginService) { }

  title = 'Employee_ManagementSystem';
  isLoggedIn = false;

  ngOnInit() {
    this.log.isLoggedIn.subscribe((value) => {
      this.isLoggedIn = value;

      console.log(value)
    })
  }

  Logout() {
    this.isLoggedIn = false;
    localStorage.removeItem("CurrentIndividual");
  }

}
