import { Component, Input } from '@angular/core';
import { CartService } from '../../service/cart.service';


@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() data: any;
  public placeholderImg: string = 'assets/img/placeholder.jpg';

  constructor(
    private cartService: CartService,
   ) { }


  removeFromCart(itemId: number) {
    this.cartService.removeFromCart(itemId);
  }

  //Change Quantity here 
  // Future things
  // increaseQty(itemId: number) {
  //      console.log('itemId', itemId);
       
  //   this.cartService.addToCart({ id:itemId }, 1);
  //  }
  
  //   decreaseQty(itemId: number) {
  //     this.cartService.addToCart({ id:itemId }, -1);
  // }

}
