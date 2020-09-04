import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './Login-Pages/login-page.component';


const routes: Routes = [
    {
    path:'login',
    component:LoginPageComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class LoginRoutingModule { }
