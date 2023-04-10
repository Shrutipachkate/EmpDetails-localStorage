import { Component, OnInit } from '@angular/core';
// import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DetailsService } from '../details.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  addDetails = new FormGroup({
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
      Validators.pattern('[(+91) 0-9]*'),
    ]),
    city: new FormControl(''),
    hometown: new FormControl(''),
    address: new FormControl(''),
    type: new FormControl('Type', [Validators.required]),
  });
  constructor(private details: DetailsService) {}
  ngOnInit(): void {}
  collectDetails() {
    this.details.saveDetails(this.addDetails.value).subscribe((result) => {
      console.warn(result);
    });
  }
  get name(): FormControl {
    return this.addDetails.get('name') as FormControl;
  }

  get role(): FormControl {
    return this.addDetails.get('role') as FormControl;
  }

  get email(): FormControl {
    return this.addDetails.get('email') as FormControl;
  }

  get mobile(): FormControl {
    return this.addDetails.get('mobile') as FormControl;
  }
  get type(): FormControl {
    return this.addDetails.get('type') as FormControl;
  }
  get dob(): FormControl {
    return this.addDetails.get('dob') as FormControl;
  }
}
