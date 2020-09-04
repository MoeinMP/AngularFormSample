import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './Home-Pages/home-page.component';
import { MainLayoutComponent } from '../../Layout/Main-Layout/main-layout/main-layout.component';


const routes: Routes = [
  {
path:'',
component: MainLayoutComponent,
children:
  [
    {
      path:'',
      component:HomePageComponent
    },
    {
    path:'home',
    component: HomePageComponent
  }
]
}
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule { }
