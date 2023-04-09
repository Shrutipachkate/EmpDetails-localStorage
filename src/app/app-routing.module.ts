import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { CardComponent } from './card/card.component';
import { DrawerComponent } from './drawer/drawer.component';

import { UpdateContainerComponent } from './update-container/update-container.component';
const routes: Routes = [
  {path:'toolbar',component: ToolbarComponent},
  {path:'sidebar',component: SidebarComponent},
  {path:'main-container',component: MainContainerComponent},
  {path:'card',component: CardComponent},
  {path:'drawer',component: DrawerComponent},
  // {path:'update/:id',component: UpdateComponent},
  {path:'update-container/:id',component: UpdateContainerComponent},
  
  {
    path:'',redirectTo: '/main-container',pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
