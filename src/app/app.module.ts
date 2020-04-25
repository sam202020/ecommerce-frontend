import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShopperHeaderComponent } from './shopper-header/shopper-header.component';
import { ShopperHomeComponent } from './shopper-home/shopper-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {ProductApiService } from './shared/product-api/product-api.service'

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    AdminHeaderComponent,
    AdminHomeComponent,
    LoginComponent,
    ProductComponent,
    RegistrationComponent,
    ShopperHeaderComponent,
    ShopperHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ProductApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
