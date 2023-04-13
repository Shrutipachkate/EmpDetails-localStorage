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

  collection: any = [];

  constructor(private details: DetailsService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.details.getList().subscribe((result) => {
      console.warn(result);
      this.collection = result;
    });
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
          this.collection.push(val);
        }
      },
    });
  }
  openEditForm(data: any) {
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
          const index = this.collection.findIndex(
            (emp: { id: any }) => emp.id === val.id
          );
          this.collection[index] = val;
        }
      },
    });
  }

  deleteDetails(item: any) {
    this.collection.splice(item - 1, 1);
    this.details.deleteDetails(item).subscribe((result) => {
      console.warn('result', result);
    });
  }
}
