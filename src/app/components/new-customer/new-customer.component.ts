import { Component, OnInit } from '@angular/core';
import { CustomerInfo } from 'src/app/models/customerInfo';
import { CustomersService } from 'src/app/services/customers.service';
import { User } from 'src/app/models/user';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  public customer = new CustomerInfo;
  public user = new User;

  constructor(private customersService: CustomersService, private router: Router) { }

  ngOnInit() {
    
  }

  public createCustomer(): void{
    this.user.userType = "Customer";
    this.customer.user = this.user;

    this.customersService.createCustomer(this.customer).subscribe(id=>{
      alert("Your customer account was created successfully, please login to website" + id);
      this.router.navigate(["/home/"])
    },error=>{
      alert("Failed to create a customer");
    })
  }

}
