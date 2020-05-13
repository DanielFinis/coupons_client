import { Component, OnInit, Input } from '@angular/core';
import { CustomerInfo } from 'src/app/models/customerInfo';
import { SuccessfulLoginServerResponse } from 'src/app/models/SuccessfulLoginServerResponse';
import { CustomersService } from 'src/app/services/customers.service';
import { LoginComponent } from '../login/login.component';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public currentCustomer = new CustomerInfo;
  
  
  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    
    this.customersService.getCustomer().subscribe(customerInfo => {
      this.currentCustomer = customerInfo;
    },error => {
      alert("Failed to get customer details");
    }
    )
    
  }

}
