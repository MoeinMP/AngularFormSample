import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './User-Services/user.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UserService
  ]
})
export class CoreModule { }
