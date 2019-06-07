import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsManagementService } from '../../services/products-management.service';
import { shoppingCart, homeNav } from '../../constants/defines'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public productsService: ProductsManagementService) { }
  @Input() noOfSelectedProducts: number;
  @Input() amountOfSelectedProducts: number;
  currentTempCount = 0;
  currentTempPrices = 0;
  cartHome: string;
  cartAmount: string;
  homeNav: string;

  ngOnInit() {
    this.showCartTotalPrice();
    this.showCartSelectedProducts();
    this.configureShoppingCartAndHomeNavigation();
  }
  navigateToProductsList() {
    this.router.navigate(['/']);
    this.passProductCountData();
    this.passProductsPricesData();
  }
  showCartTotalPrice() {
    this.currentTempPrices = this.productsService.getcurrentTempPrice();
    if (this.currentTempPrices > this.amountOfSelectedProducts) {
      this.amountOfSelectedProducts = this.currentTempPrices;
    } else {
      this.amountOfSelectedProducts = this.amountOfSelectedProducts;
    }
  }

  showCartSelectedProducts() {
    this.currentTempCount = this.productsService.noOfProductsSelected - 1;
    if (this.currentTempCount > this.noOfSelectedProducts) {
      this.noOfSelectedProducts = this.currentTempCount;
    } else {
      this.noOfSelectedProducts = this.noOfSelectedProducts;
    }
  }

  passProductCountData() {
    this.currentTempCount = this.productsService.noOfProductsSelected - 1;
    this.productsService.parentNavbarNumberOfproducts = this.noOfSelectedProducts;
  }
  passProductsPricesData() {
    this.currentTempPrices = this.productsService.getcurrentTempPrice();
    this.productsService.parentNavbarTotalPrice = this.amountOfSelectedProducts;
  }

  configureShoppingCartAndHomeNavigation() {
    this.cartAmount = shoppingCart.cartAmount;
    this.cartHome = shoppingCart.cart;
    this.homeNav = homeNav.home;

  }




}
