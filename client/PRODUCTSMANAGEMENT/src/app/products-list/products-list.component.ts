import { Component, OnInit, Input } from '@angular/core';
import { ProductsManagementService } from '../shared/services/products-management.service';
import { shoppingCart } from '../shared/constants/defines'

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
  cartHome: string;
  cartAmount: string;


  @Input() responseData: any;
  ngOnInit() {
    this.productsService.getAllProducts().subscribe((res) => {
      this.products = res;
    });
    this.productsService.returnAllProducts();
    this.configureAllProducts();
    this.configureShoppingCart();
  }

  /**
   *This is the configureAllProducts function
   *that passes selectedproducts and total price of selected products
   from the productsDetails page to the productsList page
   */
  configureAllProducts() {
    this.noOfProductsSelected = this.productsService.parentNavbarNumberOfproducts;
    this.totalProductsPrice = this.productsService.parentNavbarTotalPrice;
  }

  /**
   *This is the configureShoppingCart function
   *that  sets the correct text to be displayed beside the
   shopping cart icon
   */
  configureShoppingCart() {
    this.cartAmount = shoppingCart.cartAmount;
    this.cartHome = shoppingCart.cart;
  }




}
