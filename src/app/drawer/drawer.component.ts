import { Component, OnInit } from '@angular/core';
// import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DetailsService } from '../details.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  addDetails = new FormGroup({
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
  constructor(private details: DetailsService) {}
  ngOnInit(): void {}
  collectDetails() {
    this.details.saveDetails(this.addDetails.value).subscribe((result) => {
      console.warn(result);
    });
  }
}
