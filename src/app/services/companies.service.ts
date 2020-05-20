import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Observable } from 'rxjs';
import { UrlAddressService } from './url-address.service';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

 

  constructor(private http:HttpClient, private ec2address:UrlAddressService) { }

  private publicaddress = this.ec2address.ec2address;

  public getCompany(): Observable<Company>
  {
    return this.http.get<Company>(this.publicaddress+"/companies/byId");
  }
}
