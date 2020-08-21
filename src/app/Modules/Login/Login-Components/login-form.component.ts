import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/Core/User-Services/user.service';

import { user } from 'src/app/Models/user';


@Component({
  selector: 'mmp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username:string;
  password:string;
  userAuthentication:user;
  userAuthenticationErrMsg:string;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  login (loginForm: any): void {

    this.username =loginForm.value.username;
    this.password =loginForm.value.password;

    this.userService.getUserList().subscribe(
      (data:any) =>{

        this.userAuthentication=data.userCredentialList.find(usr => usr.username===this.username && usr.password=== this.password);

        if (this.userAuthentication !=null)
        {
          this.router.navigate(['/home']);
        }
        else{
         this.userAuthenticationErrMsg="Username or password is incorrect";
        }
      },
      (error) => {
        this.userAuthenticationErrMsg="Not Connect To Database To Check User Credential";
        }
    )
  }
}
