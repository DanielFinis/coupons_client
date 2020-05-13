import { Component, OnInit } from '@angular/core';
import { CouponsService } from 'src/app/services/coupons.servise';
import { Router, ActivatedRoute } from '@angular/router';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

public currentCoupon = new Coupon;
public updatedCoupon = new Coupon;

  constructor(private couponsService: CouponsService,  private router: Router,
    private activatedroute: ActivatedRoute) { }

  ngOnInit() {
   
    const id = this.activatedroute.snapshot.params.id;
      this.couponsService.getCoupon(id).subscribe(coupon =>{
      const id = this.activatedroute.snapshot.params.id;
      this.currentCoupon = coupon;
      this.updatedCoupon.id = id;
    }, err => {
      alert("Failed to get coupon");
    })
  }

  public UpdateCoupon(): void{
       
    this.couponsService.updateCoupon(this.updatedCoupon).subscribe(id=>{
      alert("Your details are updated" + id);
      this.router.navigate(["/company/"])
      
    },error=>{
      alert("Failed to create a customer");
    })
  }
  }


