import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeInformation } from '../listInterface';
import { InfoListServiceService } from './info-list-service.service';

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.scss']
})
export class EmployeeInformationComponent implements OnInit {
  listOfEmployees: EmployeeInformation[] = [];
  EmployeeList: any;
  empId: any;
  currentUser: any;
  currentUserDetails: any;

  constructor(private EmployeeInfoList: InfoListServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.EmployeeInfoList.setDataInLocalStorage();
    this.EmployeeList = JSON.parse(localStorage.getItem("EmployeeInformation") || "{}")
    this.route.queryParams.subscribe(params => {
      this.empId = Number(params['employeeId'])
    })
    for (let info of this.EmployeeList) {
      if (info.EmployeeId == this.empId) {
        this.currentUserDetails = [info]
      }
    }
  }






}
