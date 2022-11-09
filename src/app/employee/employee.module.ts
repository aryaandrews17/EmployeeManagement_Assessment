import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeInformationComponent } from './employee-information/employee-information.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { MatGridListModule } from '@angular/material/grid-list'
import { EmployeeInfocanActivateService } from './employee-information/employee-info-canActivate.service';
import { AuthorizationService } from '../login/authorization.service';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeInformationComponent

  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatGridListModule

  ],
  providers: [EmployeeInfocanActivateService, AuthorizationService]
})
export class EmployeeModule { }
