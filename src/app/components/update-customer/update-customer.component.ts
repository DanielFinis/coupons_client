import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { CustomerInfo } from 'src/app/models/customerInfo';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  
  public updatedCustomer = new CustomerInfo;
  public updatedUser = new User;

  constructor(private customersService: CustomersService, private router: Router) { }

  ngOnInit() {

   
  }

  public updateCustomer(): void{
   
    this.updatedCustomer.user = this.updatedUser;

    this.customersService.updateCustomer(this.updatedCustomer).subscribe(id=>{
      alert("Your details are updated" + id);
      this.router.navigate(["/customer-details/"])
      
    },error=>{
      alert("Failed to create a customer");
    })
  }


 

}
