import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DetailsService } from '../details.service';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  employeeForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-z A-Z]*'),
    ]),
    dob: new FormControl('', [Validators.required]),
    lang: new FormControl(''),
    skills: new FormControl(''),
    role: new FormControl('', [Validators.required]),
    gender: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10),
      Validators.pattern('[0-9]*'),
    ]),
    city: new FormControl(''),
    hometown: new FormControl(''),
    address: new FormControl(''),
    type: new FormControl('', [Validators.required]),
  });


  // employeeObj: EmployeeObj;
  // EmployeeObj: any;
  employeeArr: EmployeeObj[] = [];
  // employeeArr:any=[];

  constructor(
    private fb: FormBuilder,
    // private details: DetailsService,
    private dialogRef: MatDialogRef<DrawerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // this.employeeObj = new EmployeeObj();
  }

  ngOnInit(): void {
    if (this.data && this.data.id) {
      this.employeeForm.patchValue(this.data);
      // console.log(this.data.id);
    }
  }
  onFormSubmit() {
    const isData = JSON.parse(localStorage.getItem('EmpData')|| '[]') ;
    if (this.data && this.data.id) {
      this.employeeForm.patchValue(this.data);
      localStorage.setItem('EmpData', JSON.stringify(isData));
    } else {
      // const newArr = [];
      isData.push(this.employeeForm.value);
      localStorage.setItem('EmpData', JSON.stringify(isData));
    }
    this.getAllEmployee();
    
  }

  getAllEmployee() {
    const isData = localStorage.getItem('EmpData');
    if (isData != null) {
      const localData = JSON.parse(isData);
      this.employeeArr = localData;
      // console.log(this.employeeArr)
    }
  }

  get name(): FormControl {
    return this.employeeForm.get('name') as FormControl;
  }

  get role(): FormControl {
    return this.employeeForm.get('role') as FormControl;
  }

  get email(): FormControl {
    return this.employeeForm.get('email') as FormControl;
  }

  get mobile(): FormControl {
    return this.employeeForm.get('mobile') as FormControl;
  }
  get type(): FormControl {
    return this.employeeForm.get('type') as FormControl;
  }
  get dob(): FormControl {
    return this.employeeForm.get('dob') as FormControl;
  }
}

export interface EmployeeObj {
  id: number;
  Name: string;
  address: string;
  dob: string;
  email: string;
  gender: string;
  hometown: string;
  lang: string;
  mobile: string;
  skills: string;
  role: string;
  type: string;
  city: string;

  // constructor() {
  //   this.id = 0;
  //   this.Name = ' ';
  //   this.Address = ' ';
  //   this.Dob = ' ';
  //   this.Email = ' ';
  //   this.Gender = ' ';
  //   this.Hometown = ' ';
  //   this.Language = ' ';
  //   this.Mobile = ' ';
  //   this.Skill = ' ';
  //   this.role = ' ';
  //   this.type = ' ';
  //   this.city = '';
  // }
}
