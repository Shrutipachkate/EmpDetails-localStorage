import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { DetailsService } from '../details.service';
import { DrawerComponent } from '../drawer/drawer.component';
import { UpdateContainerComponent } from '../update-container/update-container.component';

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

  collection: any = [];

  constructor(private details: DetailsService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.details.getList().subscribe((result) => {
      console.warn(result);
      this.collection = result;
    });
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DrawerComponent, {
      width: '621px',
      height: '100%',
      maxHeight: 'none',
      position: { right: '0' },

      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialog1(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    id: number
  ): void {
    this.dialog.open(UpdateContainerComponent, {
      width: '621px',
      height: '100%',
      maxHeight: 'none',
      position: { right: '0' },

      enterAnimationDuration,
      exitAnimationDuration,

      data: { id },
    });
  }

  deleteDetails(item: any) {
    this.collection.splice(item - 1, 1);
    this.details.deleteDetails(item).subscribe((result) => {
      console.warn('result', result);
    });
  }
}
