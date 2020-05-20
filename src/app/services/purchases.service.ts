import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Purchase } from '../models/purchase';
import { UrlAddressService } from './url-address.service';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  
constructor(private http:HttpClient, private ec2address:UrlAddressService) { }

private publicaddress = this.ec2address.ec2address;

  public createPurchase (purchase: Purchase): Observable<Purchase>{
    return this.http.post<Purchase>(this.publicaddress+"/purchases", purchase);
  }

  public getCustomesPurchases(): Observable<Purchase []>
  {
    return this.http.get<Purchase []>(this.publicaddress+"/purchases/byCustomer");
  }
}
