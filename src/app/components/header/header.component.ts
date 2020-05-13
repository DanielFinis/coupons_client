import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { CustomersService } from 'src/app/services/customers.service';
import { CustomerInfo } from 'src/app/models/customerInfo';
import { LoginOutputService } from 'src/app/services/login-output.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public currentCustomer = new CustomerInfo;

  constructor(private customerService: CustomersService, private loginOutputService: LoginOutputService, private router: Router) { }

  ngOnInit() {
    this.loginOutputService.login$
      .subscribe(message => {
        if (message == 'new login') {
          this.getCustomer();
          alert("new logig happend");
        }

      }, error => {

      })
     
  }

  public getCustomer(): void {
    this.customerService.getCustomer().subscribe(customerInfo => {
      // alert("GOOD" + customerInfo.fullName);
      this.currentCustomer = customerInfo;
    }, error => {
      // alert("BAD");
    }
    )
  }
    public logOut(): void{
      sessionStorage.removeItem("token");
      this.router.navigate(["/home"]);
      this.currentCustomer.fullName="";
     
    }
  }
