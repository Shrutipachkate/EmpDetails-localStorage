import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  collection: any = [];
  permanentCount: number=0;
  internCount: number=0;

  constructor(private details: DetailsService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.details.getList().subscribe((result) => {
      console.warn(result);
      this.collection = result;
      this.permanentCount = this.collection.filter((e: { type: string; }) => e.type === 'Permanent').length;
      this.internCount = this.collection.filter((e: { type: string; }) => e.type === 'Intern').length;
    });




  }
  items = [
    {
      title: 'All Employees',
      value: '',
      img: 'assets/bell.svg',
    },

    {
      title: 'Permanent',
      value: '',
      img: '',
    },
    {
      title: 'Intern',
      value: 30,
      img: '',
    },
  ];
}
