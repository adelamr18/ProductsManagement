import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsManagementService } from '../../services/products-management.service';
import { pricePerHead, buttons } from '../../constants/defines'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  constructor(private router: Router, public productsService: ProductsManagementService) { }

  @Input() data: any;
  product: any;
  pricePerHead: string;
  viewButton: string;
  ngOnInit() {
    this.product = this.data;
    this.configureProductCards();
  }
  navigateToProductDetails(productId) {
    this.productsService.productId = productId;
    this.router.navigate(['/productDetail', productId]);
  }
   /**
   *This is the configureProductCards function
   *that sets the correct text to be displayed within the card contaning the retrieved product
   from the api response
   */
  configureProductCards() {
    this.pricePerHead = pricePerHead.pricePerHead;
    this.viewButton = buttons.viewButton;
  }



}
