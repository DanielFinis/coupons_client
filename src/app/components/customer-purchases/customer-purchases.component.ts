import { Component, OnInit } from '@angular/core';
import { PurchasesService } from 'src/app/services/purchases.service';
import { Purchase } from 'src/app/models/purchase';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-customer-purchases',
  templateUrl: './customer-purchases.component.html',
  styleUrls: ['./customer-purchases.component.css']
})
export class CustomerPurchasesComponent implements OnInit {

  public purchases: Purchase [];
  public displayedCoupon: Coupon;

  constructor(private purchasesService: PurchasesService) {
    this.purchases = [];
   }
  

  ngOnInit() {
    let observable = this.purchasesService.getCustomesPurchases();
    observable.subscribe(listOfPurchases => {
      this.purchases = listOfPurchases;
      console.log(this.purchases)
    },errorBean => {
      alert("Failed to get customes purchases");
    });
  }

}
