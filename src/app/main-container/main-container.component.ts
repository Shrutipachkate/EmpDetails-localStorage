import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
export interface PeriodicElement {
  name: string;
  role: string;
  type: string;
  mobile: string;
  email: string;
  skills: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Vivek Sharma',role:'Software Engineer', type: 'Intern', mobile: '+91 6230543723' , email: 'Vikas.S@iauro.com', skills: 'Wireframes    Prototypes'},
  { name: 'Marvin MCKinney', role:'Software Engineer', type: 'Intern', mobile: '+91 6230543723' , email: 'Vikas.S@iauro.com', skills: 'Wireframes    Prototypes'},
  { name: 'Kathryn Murphy',role:'Software Engineer', type: 'Intern', mobile: '+91 6230543723' , email: 'Vikas.S@iauro.com', skills: 'Wireframes    Prototypes' },
  { name: 'Ariene McCoy',role:'Software Engineer', type: 'Intern', mobile: '+91 6230543723' , email: 'Vikas.S@iauro.com', skills: 'Wireframes    Prototypes'},
  { name: 'Brookiyn Simmons', role:'Software Engineer', type: 'Intern', mobile: '+91 6230543723' , email: 'Vikas.S@iauro.com', skills: 'Wireframes    Prototypes'},
  { name: 'Cody Fisher',role:'Software Engineer', type: 'Intern', mobile: '+91 6230543723' , email: 'Vikas.S@iauro.com', skills:'Wireframes    Prototypes' },
  { name: 'Savannah Nguyen', role:'Software Engineer', type: 'Intern', mobile: '+91 6230543723' , email: 'Vikas.S@iauro.com', skills: 'Wireframes    Prototypes'},
  { name: 'Wade Warren',role:'Software Engineer', type: 'Intern', mobile: '+91 6230543723' , email: 'Vikas.S@iauro.com', skills:'Wireframes    Prototypes' },
  { name: 'Ronald Richards',role:'Software Engineer', type: 'Intern', mobile: '+91 6230543723' , email: 'Vikas.S@iauro.com', skills:'Wireframes    Prototypes' },
];

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent {
  displayedColumns: string[] = ['name', 'role', 'type', 'mobile', 'email', 'skills'];
  dataSource = ELEMENT_DATA;

}
