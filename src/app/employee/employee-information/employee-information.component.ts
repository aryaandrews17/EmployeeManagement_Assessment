import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoListServiceService } from 'src/app/services/info-list-service.service';
import { IEmployeeInformation } from '../listInterface';


@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.scss']
})
export class EmployeeInformationComponent implements OnInit {

  EmployeeList: IEmployeeInformation[] = [];
  empId: number = 0;
  currentUserDetails: IEmployeeInformation = {
    EmployeeId: 0, EmployeeName: '', Password: '', PhoneNumber: 0, TeamNumber: 0, Address: '',
    Information: ''
  };

  constructor(private EmployeeInfoList: InfoListServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.EmployeeInfoList.setDataInLocalStorage();
    this.EmployeeList = JSON.parse(localStorage.getItem("EmployeeInformation") || "{}");
    this.route.queryParams.subscribe(params => {
      this.empId = Number(params['employeeId'])
    });
    for (let info of this.EmployeeList) {
      if (info.EmployeeId == this.empId) {
        this.currentUserDetails = info;
      }
    }
  }
}
