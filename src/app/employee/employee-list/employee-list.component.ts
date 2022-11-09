import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoListServiceService } from '../employee-information/info-list-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent implements OnInit {
  listOfEmployees: any;
  EmployeeList: any
  currentUserDetails: any[] = [];
  currentUser: any;

  constructor(private EmployeeInfoList: InfoListServiceService, private router: Router) { }

  ngOnInit(): void {
    this.EmployeeInfoList.setDataInLocalStorage();

    this.EmployeeList = JSON.parse(localStorage.getItem("EmployeeInformation") || "{}")
    for (let info of this.EmployeeList) {
      info.TeamNumber = this.EmployeeInfoList.getTeamDepartment(info.TeamNumber)
      this.currentUserDetails.push(info);
    }
  }

  onClick(employeeId: number) {
    this.router.navigate([
      'Employee/EmployeeInformation', employeeId], { queryParams: { employeeId } }
    );
  }

}
