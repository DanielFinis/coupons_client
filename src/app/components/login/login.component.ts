import { RoutingModule } from './../../routing.module';
import { SuccessfulLoginServerResponse } from './../../models/SuccessfulLoginServerResponse';
import { Observable, observable } from 'rxjs';
import { UsersService } from './../../services/users.service';
import { Component, OnInit, Output } from '@angular/core';
import { UserLoginDetails } from 'src/app/models/UserLoginDetails';
import { Router, RouterLink } from '@angular/router';
import { EventEmitter } from 'protractor';
import { LoginOutputService } from 'src/app/services/login-output.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userLoginDetails: UserLoginDetails;


  constructor(private usersService: UsersService, private router: Router, private loginOutputService: LoginOutputService) {
    this.userLoginDetails = new UserLoginDetails();

  }

  ngOnInit() { }


  public login(): void {
    let observable = this.usersService.login(this.userLoginDetails);

    observable.subscribe(successfulServerRequestData => {
      console.log(successfulServerRequestData);
      sessionStorage.setItem("token", successfulServerRequestData.token + "");

      this.loginOutputService.sendLoginStatus('new login');

      if (successfulServerRequestData.userType == "Customer") {
        this.router.navigate(["/customer"]);
      }
      if (successfulServerRequestData.userType == "Company") {
        this.router.navigate(["/company"]);
      }

    }, errorBean => { console.log('fuck off ' + errorBean); }
    );
  }
}

