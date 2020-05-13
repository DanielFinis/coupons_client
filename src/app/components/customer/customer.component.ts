import { CouponsService } from './../../services/coupons.servise';
import { observable } from 'rxjs';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { chainedInstruction } from '@angular/compiler/src/render3/view/util';

import { Router } from '@angular/router';
import { AddPurchaseComponent } from '../add-purchase/add-purchase.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']

  
})

export class CustomerComponent implements OnInit {

  public coupons: Coupon[];
  public displayedCoupon : Coupon;
  public maxPrice: number;
  private addPurchaseComponent: AddPurchaseComponent;

  constructor(private couponsService: CouponsService, private router: Router) { }
  

  ngOnInit() {
    let observable = this.couponsService.getAllCoupons();
    observable.subscribe(listOfCoupons => {
      this.coupons = listOfCoupons;
    },errorBean => {console.log('fuck off '+errorBean); }
    ); 

    this.maxPrice = 2000000;
  }

  public onCouponClicked (currentCoupon : Coupon): void{
    this.displayedCoupon = currentCoupon;
    console.log(currentCoupon);

  }

  

public onCloseCouponWindow() : void{
    this.displayedCoupon = null;
}

public goToAddPurchase():void{
  this.router.navigate(["/add-purchase/:id"])
}

public purchaseCoupon(){
}
}


