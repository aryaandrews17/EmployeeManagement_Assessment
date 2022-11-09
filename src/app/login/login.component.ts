import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InfoListServiceService } from '../employee/employee-information/info-list-service.service';
import { EmployeeInformation } from '../employee/listInterface';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formFields: any[] = []
  form = new FormGroup({});
  listOfEmployees: EmployeeInformation[] = [];
  flag: number = 0;


  constructor(private EmployeeInfoList: InfoListServiceService, private httpClient: HttpClient, private router: Router, private Log: LoginService) { }

  ngOnInit(): void {
    this.httpClient.get<any[]>('/assets/data.json').subscribe((formFields: any[]) => {
      for (const formField of formFields) {
        this.form.addControl(formField.fieldName, new FormControl('', this.getValidator(formField)));

      }
      this.formFields = formFields;
    });
  }

  private getValidator(formField: any): ValidatorFn[] {
    let validation: ValidatorFn[] = [];
    for (const valid of formField.validator) {
      switch (valid) {
        case 'required':
          validation.push(Validators.required);
          break;
      }
    }
    return validation;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.checkCredentials();
    }
    if (this.flag == 0) { console.log('invalid details') }
  }

  getEmployeeData() {
    this.listOfEmployees = this.EmployeeInfoList.GetEmployeeInfoList();
  }

  checkCredentials(): any {
    let i: any;
    let CurrentUser: any[];
    const x = this.getEmployeeData();

    var password = this.form.get('Password')?.value;
    var employeeId = this.form.get('EmployeeId')?.value;
    CurrentUser = [employeeId, password]
    for (i of this.listOfEmployees) {
      if (i.Password == password && i.EmployeeId == employeeId) {
        this.router.navigate(['Employee/EmployeeInformation'], { queryParams: { employeeId } })
        console.log(this.form.value);
        this.flag++;
        localStorage.setItem("CurrentIndividual", JSON.stringify(i));
      }
    }
    if (this.flag == 0)
      this.Log.logout();
    else
      this.Log.login();
  }
}