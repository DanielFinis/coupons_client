import { Coupon } from 'src/app/models/coupon';
import { SuccessfulLoginServerResponse } from './../models/SuccessfulLoginServerResponse';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserLoginDetails } from '../models/UserLoginDetails';
import { Observable } from 'rxjs';
import { UrlAddressService } from './url-address.service';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  constructor(private http:HttpClient, private ec2address:UrlAddressService) { }

  private publicaddress = this.ec2address.ec2address;

  public getAllCoupons (): Observable<Coupon []>
  {
    return this.http.get<Coupon []>(this.publicaddress+"/coupons");
  }

  public getCoupon (id: number): Observable<Coupon>
  {
    return this.http.get<Coupon>(this.publicaddress+"/coupons/"+id);
  }

  public getCompanyCoupons(): Observable<Coupon []>
  {
    return this.http.get<Coupon []>(this.publicaddress+"/coupons/byCompany");
  }

  public createCoupon(coupon: Coupon): Observable<Coupon>
{
  return this.http.post<Coupon>(this.publicaddress+"/coupons", coupon);
}

public deleteCoupon(id: number): Observable<Coupon>
  {
    return this.http.delete<Coupon>(this.publicaddress+"/coupons/"+id);
  }

  public updateCoupon(coupon: Coupon): Observable<Coupon>
{
  return this.http.put<Coupon>(this.publicaddress+"/coupons", coupon);
}
  
}
