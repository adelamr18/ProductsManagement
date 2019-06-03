import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  constructor(private router: Router) { }

  @Input() data: any;
  product: any;
  ngOnInit() {
    this.product = this.data;
  }
  navigateToProductDetail(productId) {
    this.router.navigate(['/productDetail'], { queryParams: { productId } });
  }
}
