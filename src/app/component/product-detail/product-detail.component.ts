import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any;
  public quantity: number = 1; 
  public placeholderImg: string = 'assets/img/placeholder.jpg';

    productImages: string[] = [];
  currentImageIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit() {
    // id from the route ===
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
    
      this.apiService.getProductById(productId).subscribe(
        data => {
          this.product = data;
          this.product.id = productId;
          // fake carousel Images ===
          this.product.productImages = [
            `https://picsum.photos/id/${productId}/300/300`,
            `https://picsum.photos/id/${productId + 1}/300/300`,
            `https://picsum.photos/id/${productId + 2}/300/300`
          ];
          this.productImages = this.product.productImages
          console.log('API Response:', this.product);
        },
        error => console.error(error)
      );

    } else {
      console.error('Product ID is null');
      this.router.navigate(['/products']);
    }

    
  }


  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product, this.quantity);
    }
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }


    // Counter functions ===
  increaseQuantity() {
    this.quantity += 1;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }


// Image Carousel funtions 
 nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.productImages.length;
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.productImages.length) % this.productImages.length;
  }

}
