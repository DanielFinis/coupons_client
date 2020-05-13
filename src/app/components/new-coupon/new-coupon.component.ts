import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CouponsService } from 'src/app/services/coupons.servise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-coupon',
  templateUrl: './new-coupon.component.html',
  styleUrls: ['./new-coupon.component.css']
})
export class NewCouponComponent implements OnInit {

  public coupon = new Coupon;

  constructor(private couponsService: CouponsService, private router: Router) { }

  ngOnInit() {
  }

  public createCoupon(): void{
    

    this.couponsService.createCoupon(this.coupon).subscribe(id=>{
      alert("The coupon was created successfull" + id);
      this.router.navigate(["/company/"])
    },error=>{
      alert("Failed to create a customer");
    })
  }

}
