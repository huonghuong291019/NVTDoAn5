import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { SwishComponent } from './swish/swish.component';
const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'swish',
    component: SwishComponent,
  },
]; 
@NgModule({
  declarations: [CartComponent,CheckoutComponent, SwishComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class CustomerModule { }