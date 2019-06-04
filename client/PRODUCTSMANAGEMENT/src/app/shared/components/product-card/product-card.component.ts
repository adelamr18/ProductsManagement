import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsManagementService } from '../../services/products-management.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  constructor(private router: Router, public productsService: ProductsManagementService) { }

  @Input() data: any;
  product: any;
  ngOnInit() {
    this.product = this.data;
  }
  navigateToProductDetails(productId) {
    this.productsService.productId = productId;
    this.router.navigate(['/productDetail', productId]);
  }
}
