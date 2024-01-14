import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  totalQuantity: number = 0;
  private subscription: Subscription;

  constructor(
    private cartService: CartService,
     private router: Router
  ) {


    // Subscribe to the totalQuantity observable ==
    this.subscription = this.cartService.getTotalQuantityObservable().subscribe(
      quantity => this.totalQuantity = quantity
    );
    }
  

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

   navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

}
