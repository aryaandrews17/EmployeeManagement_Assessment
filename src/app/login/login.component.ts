import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEmployeeInformation } from '../employee/listInterface';
import { LoginService } from '../services/login.service';
import { IForm } from './iform';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formFields: IForm[] = []
  form = new FormGroup({});
  listOfEmployees: IEmployeeInformation[] = [];
  flag: number = 0;


  constructor(private httpClient: HttpClient, private router: Router, private Log: LoginService) { }

  ngOnInit(): void {
    this.httpClient.get<IForm[]>('/assets/data.json').subscribe((formFields: IForm[]) => {
      for (const formField of formFields) {
        this.form.addControl(formField.fieldName, new FormControl('', this.getValidator(formField)));
      }
      this.formFields = formFields;
    });
    this.listOfEmployees= JSON.parse(localStorage.getItem("EmployeeInformation") || "{}")
  }

  private getValidator(formField: IForm): ValidatorFn[] {
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

  checkCredentials() {
    var password = this.form.get('Password')?.value;
    var employeeId = this.form.get('EmployeeId')?.value;
    for (let i of this.listOfEmployees) {
      if (i.Password == String(password) && i.EmployeeId == Number(employeeId)) {
        this.router.navigate(['Employee/EmployeeInformation'], { queryParams: { employeeId } })
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