import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationService } from '../login/authorization.service';
import { EmployeeInfocanActivateService } from './employee-information/employee-info-canActivate.service';
import { EmployeeInformationComponent } from './employee-information/employee-information.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {
    path: 'EmployeeList',
    component: EmployeeListComponent
  },
  {
    path: 'EmployeeInformation',
    component: EmployeeInformationComponent,

  },
  {
    path: 'EmployeeInformation/:employeeId',
    component: EmployeeInformationComponent, canActivate: [AuthorizationService, EmployeeInfocanActivateService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EmployeeRoutingModule { }
