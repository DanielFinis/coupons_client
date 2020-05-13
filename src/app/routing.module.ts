import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AddPurchaseComponent } from './components/add-purchase/add-purchase.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerPurchasesComponent } from './components/customer-purchases/customer-purchases.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { NewCouponComponent } from './components/new-coupon/new-coupon.component';
import { UpdateCouponComponent } from './components/update-coupon/update-coupon.component';

const routes: Routes = [

{ path: "home", component: LoginComponent },
{ path: "customer", component: CustomerComponent },
{ path: "", redirectTo: "home", pathMatch: "full" },
// { path: "add-purchase", component: AddPurchaseComponent },
{ path: "add-purchase/:id", component: AddPurchaseComponent },
{ path: "customer-details", component: CustomerDetailsComponent },
{ path: "customer-purchases", component: CustomerPurchasesComponent },
{ path: "new-customer", component: NewCustomerComponent },
{ path: "update-customer", component: UpdateCustomerComponent },
{ path: "company", component: CompanyComponent },
{ path: "company-details", component: CompanyDetailsComponent },
{ path: "new-coupon", component: NewCouponComponent },
{ path: "update-coupon/:id", component: UpdateCouponComponent },
];

@NgModule({

declarations: [],
imports: [CommonModule, RouterModule.forRoot(routes)],
providers: [],
bootstrap: []

})

export class RoutingModule { }