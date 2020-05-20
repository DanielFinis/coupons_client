import { SuccessfulLoginServerResponse } from './../models/SuccessfulLoginServerResponse';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserLoginDetails } from '../models/UserLoginDetails';
import { Observable } from 'rxjs';
import { UrlAddressService } from './url-address.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // public successfulServerRequestData: SuccessfulLoginServerResponse;

  constructor(private http:HttpClient, private ec2address:UrlAddressService) { }

  private publicaddress = this.ec2address.ec2address;

  public login (userLoginDetails:UserLoginDetails): Observable<SuccessfulLoginServerResponse>
  {
    return this.http.post<SuccessfulLoginServerResponse>(this.publicaddress+"/users/login", userLoginDetails);
  }

  
}
