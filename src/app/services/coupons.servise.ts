import { Coupon } from 'src/app/models/coupon';
import { SuccessfulLoginServerResponse } from './../models/SuccessfulLoginServerResponse';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserLoginDetails } from '../models/UserLoginDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  constructor(private http:HttpClient) { }

  public getAllCoupons (): Observable<Coupon []>
  {
    return this.http.get<Coupon []>("http://localhost:8080/coupons");
  }

  public getCoupon (id: number): Observable<Coupon>
  {
    return this.http.get<Coupon>("http://localhost:8080/coupons/"+id);
  }

  public getCompanyCoupons(): Observable<Coupon []>
  {
    return this.http.get<Coupon []>("http://localhost:8080/coupons/byCompany");
  }

  public createCoupon(coupon: Coupon): Observable<Coupon>
{
  return this.http.post<Coupon>("http://localhost:8080/coupons", coupon);
}

public deleteCoupon(id: number): Observable<Coupon>
  {
    return this.http.delete<Coupon>("http://localhost:8080/coupons/"+id);
  }

  public updateCoupon(coupon: Coupon): Observable<Coupon>
{
  return this.http.put<Coupon>("http://localhost:8080/coupons", coupon);
}
  
}
