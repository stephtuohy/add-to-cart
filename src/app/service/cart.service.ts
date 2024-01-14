import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];
  private totalQuantity = new BehaviorSubject<number>(0);

  constructor() {}

  addToCart(product: any, quantity: number) {
    const existingIndex = this.items.findIndex(item => item.id === product.id);

    
    if (existingIndex !== -1) {
      this.items[existingIndex].quantity += quantity;
    } else {
      const cartItem = { ...product, quantity };
      this.items.push(cartItem);
    }
    this.updateTotalQuantity(); 
    console.log(this.items);
    
  }

  removeFromCart(productId: number) {
    const index = this.items.findIndex(item => item.id === productId);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.updateTotalQuantity();  
    }
  }

  private updateTotalQuantity() {
    const total = this.getTotalQuantity();
    this.totalQuantity.next(total);
  }

  getTotalQuantity(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getItems() {
    return this.items;
  }

  getTotalQuantityObservable() {
    return this.totalQuantity.asObservable();
  }


  getSubTotal(): number {
    return this.items.reduce((acc, item) => {
      let price = item.cost_in_credits === 'unknown' ? 99 : item.cost_in_credits;
      return acc + (price * item.quantity);
    }, 0);
  }

  getShippingCost(): number {
    if (!this.items.length) {
        return 0;
    } else {
        return 80;
    }
   
  }

  getTotal(): number {
    return this.getSubTotal() + this.getShippingCost();
  }
}
