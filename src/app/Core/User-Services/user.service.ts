import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

import { user } from 'src/app/Models/user';

// import { user } from 'src/app/Models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUserList():Observable<any>{
    return this.http.get<any>("./assets/Data-Store/userList.json");
      }
}
