import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginPageComponent } from './Login-Pages/login-page.component';
import { LoginFormComponent } from './Login-Components/login-form.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule    
  ]
})
export class LoginModule { }
