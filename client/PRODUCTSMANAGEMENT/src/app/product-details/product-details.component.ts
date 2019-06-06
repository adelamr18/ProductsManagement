import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsManagementService } from '../shared/services/products-management.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private Activatedroute: ActivatedRoute, private router: Router, public productsService: ProductsManagementService) { }
  productId: any;
  selectedProductId: any;
  allProducts: any;
  filtertedProduct: any;
  nofSelectedProducts = 0;
  amountOfSelectedProducts = 0;

  ngOnInit() {
    this.getAllProducts();
    this.getSelectedId();
    this.getSelectedProduct();
  }
  getAllProducts() {
    this.allProducts = this.productsService.getProducts();
  }
  getSelectedId() {
    this.selectedProductId = this.productsService.getSelectedId();
  }
  getSelectedProduct() {
    if (this.allProducts) {
      this.allProducts.find(el => {
        if (el.productId === this.selectedProductId) {
          this.filtertedProduct = el;
        }
      });
    }
  }
  onProductChange(event) {
    this.nofSelectedProducts = event;
  }
  onProductPriceChange(event) {
    if (!event.flag) {
      this.amountOfSelectedProducts = event.totalProductsAmount;
    } else {
      this.productsService.keepTrackOfTotalProductsPrice(event.totalProductsAmount);
      this.amountOfSelectedProducts = this.productsService.getcurrentTempPrice();
    }
  }


}
