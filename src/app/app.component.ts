import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { NavbarComponent } from './component/navbar/navbar.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NavbarComponent, ProductsComponent,ProductDetailComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'add-to-cart';
}
