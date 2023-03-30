import { Component } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  items = [
    {
      title: 'All Employees',
      value: 100,
      img: "assets/bell.svg",
    },

    {
      title: 'Permanent',
      value: 70,
      img: '',
    },
    {
      title: 'Intern',
      value: 30,
      img: '',
    },
  ];
}
