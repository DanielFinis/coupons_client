import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Purchase } from '../models/purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  
constructor(private http:HttpClient) { }
  public createPurchase (purchase: Purchase): Observable<Purchase>{
    return this.http.post<Purchase>("http://localhost:8080/purchases", purchase);
  }

  public getCustomesPurchases(): Observable<Purchase []>
  {
    return this.http.get<Purchase []>("http://localhost:8080/purchases/byCustomer");
  }
}
