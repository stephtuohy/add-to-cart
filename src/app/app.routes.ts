import { Routes } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'products', title: 'Products',component: ProductsComponent },
    { path: 'cart', title: 'Cart', component: CartComponent },
    { path: 'product-detail/:id', component: ProductDetailComponent },
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: '**', title: '404',component: PageNotFoundComponent },

];
