
import { Injectable } from '@angular/core';
import {  CanActivate, Router} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()

export class AuthorizationService implements CanActivate{
    constructor ( private router:Router ){}
    
    currentUser:any;
    id:any;
    private LoginStatus$ = new BehaviorSubject(false);
    public isLoggedIn = this.LoginStatus$.asObservable();

    
    canActivate(): boolean  {
        this.currentUser = JSON.parse(localStorage.getItem('CurrentIndividual') || "{}");
       
    
        if(JSON.stringify(this.currentUser) == '{}'){
        this.LoginStatus$.next(false)
         this.router.navigate(['/Login']);
       
        return false;
        }
        else{
        this.LoginStatus$.next(true);
     
        return true;
    }
    
    }

}