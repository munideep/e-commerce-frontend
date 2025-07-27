import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from './home-page/products/products.component';
import { authGuard } from './auth-guard.guard';
import { CartComponent } from './home-page/cart/cart.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home',component:HomePageComponent,
    children:[ {path:'products', component: ProductsComponent},
      {path:'cart',component: CartComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
