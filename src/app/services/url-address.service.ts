import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlAddressService {


  constructor(private http:HttpClient) { }

  public ec2address = "http://18.223.160.229:4200";

  
}
