import{  ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
// import { LeftbarComponent } from './Leftbar/Leftbar.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'about', component: AboutComponent},
    { path: 'home', component: HomeComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'cart', component: CartComponent}


]
;

export const routes: ModuleWithProviders = RouterModule.forRoot(router);