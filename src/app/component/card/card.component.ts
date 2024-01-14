import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() data: any;
  public placeholderImg: string = 'assets/img/placeholder.jpg';

   constructor(private router: Router) {}

  navigateToDetail() {
    this.router.navigate(['/product-detail', this.data.id]);
  }
}
