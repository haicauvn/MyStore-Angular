import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-list/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailComponent,
    ProductCartComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  