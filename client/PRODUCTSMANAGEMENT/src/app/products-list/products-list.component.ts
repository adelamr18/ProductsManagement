import { Component, OnInit, Input } from '@angular/core';
import { ProductsManagementService } from '../shared/services/products-management.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(public productsService: ProductsManagementService) { }
  products: any;
  noOfProductsSelected = 0;
  totalProductsPrice = 0;
  @Input() responseData: any;
  ngOnInit() {
    this.productsService.getAllProducts().subscribe((res) => {
      this.products = res;
    });
    this.productsService.returnAllProducts();
    this.noOfProductsSelected = this.productsService.parentNavbarNumberOfproducts;
    this.totalProductsPrice = this.productsService.parentNavbarTotalPrice;
  }

}
