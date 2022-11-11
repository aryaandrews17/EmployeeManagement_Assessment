
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IEmployeeInformation } from '../employee/listInterface';

@Injectable()

export class AuthorizationService implements CanActivate {
    constructor(private router: Router) { }

    currentUser: IEmployeeInformation = {
        EmployeeId: 0, EmployeeName: '', Password: '', PhoneNumber: 0, TeamNumber: 0, Address: '',
        Information: ''
    };;
    id: number = 0;
    private LoginStatus$ = new BehaviorSubject(false);
    public isLoggedIn = this.LoginStatus$.asObservable();

    canActivate(): boolean {
        this.currentUser = JSON.parse(localStorage.getItem('CurrentIndividual') || "{}");
        if (JSON.stringify(this.currentUser) == '{}') {
            this.LoginStatus$.next(false)
            this.router.navigate(['/Login']);
            return false;
        }
        else {
            this.LoginStatus$.next(true);
            return true;
        }
    }
}