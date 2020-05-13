import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CouponsService } from 'src/app/services/coupons.servise';
import { Coupon } from 'src/app/models/coupon';
import { Purchase } from 'src/app/models/purchase';
import { PurchasesService } from 'src/app/services/purchases.service';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {

  public couponDetails: Coupon;
  public purchase = new Purchase();

  public constructor(private activatedroute: ActivatedRoute, private couponsService: CouponsService,
    private purchasesService: PurchasesService ) { 
    }


  public ngOnInit() {
    const id = this.activatedroute.snapshot.params.id;
       
        this.couponsService.getCoupon(id).subscribe(coupon =>{
      const id = this.activatedroute.snapshot.params.id;
      this.couponDetails = coupon;
      this.purchase.coupon = coupon;
    }, err => {
      alert("Error: " + err.message)
    })
   }
   public createPurchase(): void{
    
    alert(`
    ID: ${this.purchase.coupon.id}
    AMOUNT: ${this.purchase.amountOfItems}
    `);
    this.purchasesService.createPurchase(this.purchase).subscribe(id=>{
      alert("Purchased");
    },error=>{
      alert("Failed");
    });
  }
  
}
