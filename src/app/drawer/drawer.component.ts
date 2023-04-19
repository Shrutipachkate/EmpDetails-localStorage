import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  employeeForm = new FormGroup({
    id: new FormControl(),
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

  EmployeeObj: any;
  employeeArr: EmployeeObj[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.employeeForm.patchValue(this.data);
  }
  onFormSubmit() {
    const isData = JSON.parse(localStorage.getItem('EmpData') || '[]');
    console.log('this.data', this.data);
    if (this.data && this.data.id) {
      const updatedData = isData.map((item: any) => {
        if (item.id === this.data.id) {
          item = this.employeeForm.value;
          item['id'] = this.data.id;
        }
        return item;
      });
      localStorage.setItem('EmpData', JSON.stringify(updatedData));
    } else {
      let newData = { ...this.employeeForm.value };
      const lastId = localStorage.getItem('lastId') || '0';
      const newId = parseInt(lastId, 10) + 1;
      newData.id = newId;
      localStorage.setItem('lastId', newId.toString());
      isData.push(newData);
      localStorage.setItem('EmpData', JSON.stringify(isData));
    }
  }

  getAllEmployee() {
    const isData = localStorage.getItem('EmpData');
    if (isData != null) {
      const localData = JSON.parse(isData);
      this.employeeArr = localData;
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
}
