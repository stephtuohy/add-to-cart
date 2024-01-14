import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList: any[] = [];

  constructor(private apiService: ApiService) { }

 ngOnInit() { 
  this.apiService.getProducts().subscribe(
    data => {

 this.productList = data.map((item: { url: string; }) => {
        // Extract the ID from the item's URL
        const urlParts = item.url.split('/');
        const id = urlParts[urlParts.length - 2]; 

        return { 
          ...item, 
          id: id, 
          image: `https://picsum.photos/id/${id}/300/300`,
          image2: `https://picsum.photos/id/${id + 100}/300/300`,
          image3: `https://picsum.photos/id/${id + 101}/300/300`
        };
      });

    },
    error => {
      console.error('Error:', error);
    }
  );
}



}
