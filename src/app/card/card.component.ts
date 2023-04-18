import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeObj } from '../drawer/drawer.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  employeeForm: any = [];
  employeeArr: EmployeeObj[] = [];
  permanentCount: number = 0;
  internCount: number = 0;

  card1ImagePath: string = 'assets/card1.svg';
  card2ImagePath: string = 'assets/card2.svg';
  card3ImagePath: string = 'assets/card3.svg';

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    // this.details.getList().subscribe((result) => {
     
    //   this.collection = result;
    //   this.permanentCount = this.collection.filter((e: { type: string; }) => e.type === 'Permanent').length;
    //   this.internCount = this.collection.filter((e: { type: string; }) => e.type === 'Intern').length;
    // });
  }
}
