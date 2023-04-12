import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DetailsService } from '../details.service';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-update-container',
  templateUrl: './update-container.component.html',
  styleUrls: ['./update-container.component.scss'],
})
export class UpdateContainerComponent {

  editDetails = new FormGroup({
    name: new FormControl(''),
    dob: new FormControl(''),
    lang: new FormControl(''),
    skills: new FormControl(''),
    role: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    city: new FormControl(''),
    hometown: new FormControl(''),
    address: new FormControl(''),
    type: new FormControl(''),
  });

  constructor(
    private router: ActivatedRoute,
    private details: DetailsService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data.id);
    this.details.getCurrentDetails(this.data.id).subscribe((result: any) => {
      this.editDetails = new FormGroup({
        name: new FormControl(result['name'], [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z].*'),
        ]),
        dob: new FormControl(result['dob'], [
          Validators.required]),
        lang: new FormControl(result['lang']),
        skills: new FormControl(result['skills']),
        role: new FormControl(result['role'], [
          Validators.required]),
        gender: new FormControl(result['gender']),
        email: new FormControl(result['email'], [
          Validators.required,
          Validators.email,
        ]),
        mobile: new FormControl(result['mobile'], [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
          Validators.pattern('[0-9]*'),
        ]),
        city: new FormControl(result['city']),
        hometown: new FormControl(result['hometown']),
        address: new FormControl(result['address']),
        type: new FormControl(result['type'], [
          Validators.required]),
      });
    });
  }

  collection() {
    console.warn(this.editDetails.value);
    this.details
      .updateDetails(this.data.id, this.editDetails.value)
      .subscribe((result) => console.warn(result));
  }

  get name(): FormControl {
    return this.editDetails.get('name') as FormControl;
  }

  get role(): FormControl {
    return this.editDetails.get('role') as FormControl;
  }

  get email(): FormControl {
    return this.editDetails.get('email') as FormControl;
  }

  get mobile(): FormControl {
    return this.editDetails.get('mobile') as FormControl;
  }
  get type(): FormControl {
    return this.editDetails.get('type') as FormControl;
  }

  get dob(): FormControl {
    return this.editDetails.get('dob') as FormControl;
  }
}
