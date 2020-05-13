import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerInfo } from '../models/customerInfo';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http:HttpClient) { }

public getCustomer(): Observable<CustomerInfo>
{
  return this.http.get<CustomerInfo>("http://localhost:8080/customers");
}

public createCustomer(customer: CustomerInfo): Observable<CustomerInfo>
{
  return this.http.post<CustomerInfo>("http://localhost:8080/customers", customer);
}

public updateCustomer(customer: CustomerInfo): Observable<CustomerInfo>
{
  return this.http.put<CustomerInfo>("http://localhost:8080/customers", customer);
}









}

