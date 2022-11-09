import { InfoListServiceService } from './info-list-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()

export class EmployeeInfocanActivateService implements CanActivate {
    constructor(private router: Router) { }

    currentUser: any;
    id: any;
    canActivate(route: ActivatedRouteSnapshot): boolean {
        this.currentUser = JSON.parse(localStorage.getItem('CurrentIndividual') || "{}");
        this.id = route.paramMap.get('EmployeeId');
        if (this.currentUser.TeamNumber == 7 || this.currentUser.TeamNumber == 8 || this.currentUser.EmployeeId == this.id) {
            return true;
        }
        else {
            this.router.navigate(['/Employee/EmployeeList']);
            window.alert('Access denied. You need to belong to HR or Admin team to access this page.');
            return false;
        }
    }
}