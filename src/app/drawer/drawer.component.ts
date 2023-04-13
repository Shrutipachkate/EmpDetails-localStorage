import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DetailsService } from '../details.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';


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
    type: new FormControl('Type', [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private details: DetailsService,
    private dialogRef: MatDialogRef<DrawerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    this.employeeForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.employeeForm.valid) {
      if (this.data) {
        this.details
          .updateDetails(this.data.id, this.employeeForm.value)
          .subscribe({
            next: (val: any) => {
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.details.saveDetails(this.employeeForm.value).subscribe({
          next: (val: any) => {
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
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
