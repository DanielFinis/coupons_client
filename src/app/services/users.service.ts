import { SuccessfulLoginServerResponse } from './../models/SuccessfulLoginServerResponse';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserLoginDetails } from '../models/UserLoginDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // public successfulServerRequestData: SuccessfulLoginServerResponse;

  constructor(private http:HttpClient) { }

  public login (userLoginDetails:UserLoginDetails): Observable<SuccessfulLoginServerResponse>
  {
    return this.http.post<SuccessfulLoginServerResponse>("http://localhost:8080/users/login", userLoginDetails);
  }

  
}
