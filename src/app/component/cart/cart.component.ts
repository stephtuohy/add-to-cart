import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  items: any[] = [];
  subTotal: number = 0
  shipping: number = 80
  total: number = 0
  

  constructor(private cartService: CartService) { }
  

 ngOnInit() {
   this.items = this.cartService.getItems();
   this.subTotal = this.cartService.getSubTotal();
   this.total = this.cartService.getTotal();
   this.shipping = this.cartService.getShippingCost();
  }

 

  removeFromCart(itemId: number) {
    this.cartService.removeFromCart(itemId);
  }

}