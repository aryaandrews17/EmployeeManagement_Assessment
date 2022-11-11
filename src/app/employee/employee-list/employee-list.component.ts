import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoListServiceService } from 'src/app/services/info-list-service.service';
import { IEmployeeInformation } from '../listInterface';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent implements OnInit {
  EmployeeList: IEmployeeInformation[] = [];

  constructor(private EmployeeInfoList: InfoListServiceService, private router: Router) { }

  ngOnInit(): void {
    this.EmployeeInfoList.setDataInLocalStorage();

    this.EmployeeList = JSON.parse(localStorage.getItem("EmployeeInformation") || "{}")
    for (let info of this.EmployeeList) {
      info.TeamNumber = this.EmployeeInfoList.getTeamDepartment(Number(info.TeamNumber))
    }
  }

  onClick(employeeId: number) {
    this.router.navigate([
      'Employee/EmployeeInformation', employeeId], { queryParams: { employeeId } }
    );
  }

}
