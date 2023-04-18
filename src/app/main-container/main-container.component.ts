import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsService } from '../details.service';
import { DrawerComponent } from '../drawer/drawer.component';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
})
export class MainContainerComponent {
  addBtnImagePath: string = 'assets/plus.svg';
  filterImagePath: string = 'assets/filter.svg';
  idCardImagePath: string = 'assets/idCard.svg';
  tableImagePath: string = 'assets/table.svg';

  // employeeObj: EmployeeObj;
  employeeArr: EmployeeObj[] = [];
  // employeeArr:any=[];

  constructor(private details: DetailsService, public dialog: MatDialog) {
    // this.employeeObj = new EmployeeObj();
  }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee() {
    const isData = localStorage.getItem('EmpData');
    if (isData != null) {
      const localData = JSON.parse(isData);
      this.employeeArr = localData;
      console.log(this.employeeArr);
    }
  }

  onDelete(item: EmployeeObj) {
    const isData = localStorage.getItem('EmpData');
    if (isData != null) {
      const localData = JSON.parse(isData);
      for (let index = 0; index < localData.length; index++) {
        if (localData[index]?.id == item.id) {
          localData.splice(index, 1);
          break;
        }
      }
      localStorage.setItem('EmpData', JSON.stringify(localData));
      this.getAllEmployee();
    }
  }

  openAddEmpForm() {
    const dialogRef = this.dialog.open(DrawerComponent, {
      width: '621px',
      height: '100%',
      maxHeight: 'none',
      position: { right: '0' },
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.employeeArr.push(val);
        }
      },
    });
  }
  openEditForm(data:any) {
    console.log(data);
    const dialogRef = this.dialog.open(DrawerComponent, {
      width: '621px',
      height: '100%',
      maxHeight: 'none',
      position: { right: '0' },
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          const index = this.employeeArr.findIndex(
            (emp: {id:number}) => emp.id === val.id
          );
          this.employeeArr[index] = val;
        }
      },
    });
  }
}

export interface EmployeeObj {
  id: number;
  name: string;
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
  //   this.Role = ' ';
  //   this.Type = ' ';
  //   this.City = '';
  // }
}
