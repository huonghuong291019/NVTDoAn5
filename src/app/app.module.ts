import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { NewComponent } from './new/new.component';
import { IntroduceComponent } from './introduce/introduce.component';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'list/:id',
    loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: 'contact',
    component: ContactComponent,
  }, 
  {
    path: 'new',
    component: NewComponent,
  }, 
  {
    path: 'introduce',
    component: IntroduceComponent,
  }, 
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ContactComponent,
    NewComponent,
    IntroduceComponent,
  ],
    exports: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
