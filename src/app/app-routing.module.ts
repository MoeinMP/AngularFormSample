import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginRoutingModule } from './Modules/Login/login-routing.module';
import { HomeRoutingModule } from './Modules/Home/home-routing.module';


const routes: Routes = [];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginRoutingModule,
    HomeRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
