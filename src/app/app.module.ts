import { RoutingModule } from './routing.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AuthenticationInterceptor } from './interceptors/AuthenticationInterceptor';
// import { CouponsPipeByMinPrice } from './pipes/CouponsPipeByMinPrice';
import { AddPurchaseComponent } from './components/add-purchase/add-purchase.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerPurchasesComponent } from './components/customer-purchases/customer-purchases.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { NewCouponComponent } from './components/new-coupon/new-coupon.component';
import { UpdateCouponComponent } from './components/update-coupon/update-coupon.component';


@NgModule({
  declarations: [
   
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    CustomerComponent,
    // CouponsPipeByMinPrice,
    AddPurchaseComponent,
    CustomerDetailsComponent,
    CustomerPurchasesComponent,
    NewCustomerComponent,
    UpdateCustomerComponent,
    CompanyComponent,
    CompanyDetailsComponent,
    NewCouponComponent,
    UpdateCouponComponent,
    

  ],
  imports: [
    BrowserModule, FormsModule,RouterModule, RoutingModule, HttpClientModule, BrowserAnimationsModule,MatInputModule,MatRadioModule
  ],
  providers: [UsersService,{ provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
