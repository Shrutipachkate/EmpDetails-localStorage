import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DetailsService } from '../details.service';
import { ActivatedRoute } from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

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
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
 
  ngOnInit(): void {
    console.log(this.data.id);
    this.details
      .getCurrentDetails(this.data.id)
      .subscribe((result: any) => {
        this.editDetails = new FormGroup({
          name: new FormControl(result['name']),
          dob: new FormControl(result['dob']),
          lang: new FormControl(result['lang']),
          skills: new FormControl(result['skills']),
          role: new FormControl(result['role']),
          gender: new FormControl(result['gender']),
          email: new FormControl(result['email']),
          mobile: new FormControl(result['mobile']),
          city: new FormControl(result['city']),
          hometown: new FormControl(result['hometown']),
          address: new FormControl(result['address']),
          type: new FormControl(result['type']),
        });
      });
  }

  collection() {
    console.warn(this.editDetails.value);
    this.details
      .updateDetails(this.data.id, this.editDetails.value)
      .subscribe((result) => console.warn(result));
  }
}
