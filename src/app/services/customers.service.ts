import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerInfo } from '../models/customerInfo';
import { UrlAddressService } from './url-address.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http:HttpClient, private ec2address:UrlAddressService) { }

  private publicaddress = this.ec2address.ec2address;

public getCustomer(): Observable<CustomerInfo>
{
  return this.http.get<CustomerInfo>(this.publicaddress+"/customers");
}

public createCustomer(customer: CustomerInfo): Observable<CustomerInfo>
{
  return this.http.post<CustomerInfo>(this.publicaddress+"/customers", customer);
}

public updateCustomer(customer: CustomerInfo): Observable<CustomerInfo>
{
  return this.http.put<CustomerInfo>(this.publicaddress+"/customers", customer);
}









}

