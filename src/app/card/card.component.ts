import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DetailsService } from '../details.service';
import { MainContainerComponent } from '../main-container/main-container.component';
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
     
      this.collection = result;
      this.permanentCount = this.collection.filter((e: { type: string; }) => e.type === 'Permanent').length;
      this.internCount = this.collection.filter((e: { type: string; }) => e.type === 'Intern').length;
    });
  }
}
