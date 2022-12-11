import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'product-list/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: ProductCartComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
