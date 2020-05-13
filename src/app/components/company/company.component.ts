import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CouponsService } from 'src/app/services/coupons.servise';
import { CompaniesService } from 'src/app/services/companies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public coupons: Coupon[];
  public displayedCoupon : Coupon;
  

  constructor(private couponsService: CouponsService, private companiesService: CompaniesService, 
    private router: Router) { }

  ngOnInit() {
   
        
    let observable = this.couponsService.getCompanyCoupons();
    observable.subscribe(listOfCoupons => {
      this.coupons = listOfCoupons;
      console.log(this.coupons)
    },errorBecurrentIdan => {
      alert("Failed to get company coupons");
    });
  }

  public onCouponClicked (currentCoupon : Coupon): void{
    this.displayedCoupon = currentCoupon;
    console.log(currentCoupon);

  }

  public onCloseCouponWindow() : void{
    this.displayedCoupon = null;
}

public deleteCoupon(): void{
  this.couponsService.deleteCoupon(this.displayedCoupon.id).subscribe(Coupon => {
    alert ("Coupon deleted");
    this.onCloseCouponWindow();
    this.ngOnInit();
    },error => {
    alert("Failed to delete coupon");
  }
  )
}

}
