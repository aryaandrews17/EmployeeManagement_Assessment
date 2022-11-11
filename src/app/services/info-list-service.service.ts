import { Injectable } from '@angular/core';
import { IEmployeeInformation } from '../employee/listInterface';


@Injectable({
  providedIn: 'root'
})


export class InfoListServiceService {


  private EmployeeInfoList: IEmployeeInformation[] = [
    {
      EmployeeName: 'A',
      TeamNumber: 1,
      PhoneNumber: 9910532987,
      Address: 'abc',
      Information: 'ghy',
      Password: 'jhu',
      EmployeeId: 90
    },
    {
      EmployeeName: 'B',
      TeamNumber: 2,
      PhoneNumber: 9910579087,
      Address: 'abck',
      Information: 'gjhhy',
      Password: 'jhju',
      EmployeeId: 990
    },
    {
      EmployeeName: 'C',
      TeamNumber: 3,
      PhoneNumber: 99906532987,
      Address: 'abjksc',
      Information: 'ghsly',
      Password: 'jhokau',
      EmployeeId: 70
    },
    {
      EmployeeName: 'D',
      TeamNumber: 4,
      PhoneNumber: 9910537547,
      Address: 'assbc',
      Information: 'ghasy',
      Password: 'jhcpu',
      EmployeeId: 50
    },
    {
      EmployeeName: 'E',
      TeamNumber: 7,
      PhoneNumber: 99870537547,
      Address: 'assbc',
      Information: 'ghasy',
      Password: 'abcd',
      EmployeeId: 100
    },
    {
      EmployeeName: 'F',
      TeamNumber: 8,
      PhoneNumber: 9910537547,
      Address: 'assbc',
      Information: 'ghasy',
      Password: 'qwerty',
      EmployeeId: 200
    }
  ];

  private teamDepartment: string[] = [
    "Engineering",
    "Implementation",
    "Product",
    "Support",
    "TOPS",
    "ITSupport",
    "HR",
    "Admin"
  ]


  constructor() { }

  getTeamDepartment(teamNo: number) {
    return (this.teamDepartment[(teamNo) - 1])
  }

  setDataInLocalStorage() {
    localStorage.setItem("EmployeeInformation", JSON.stringify(this.EmployeeInfoList))
  }
}
