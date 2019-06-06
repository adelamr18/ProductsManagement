import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsManagementService } from '../../services/products-management.service';


@Component({
  selector: 'app-product-detailed-content',
  templateUrl: './product-detailed-content.component.html',
  styleUrls: ['./product-detailed-content.component.css']
})
export class ProductDetailedContentComponent implements OnInit {

  constructor(private router: Router, public productsService: ProductsManagementService) { }

  @Input() data: any;
  toppingMaxNumber: number;
  extrasMaxNumber: number;
  selectedtProduct: any;
  toppingsSum = 0;
  globalPrice = 0;
  numberOfPersons: string;
  isFirstTypeChecked = false;
  optionsArray = [];
  allOptions = [];
  minToppingsNumber: number;
  minExtrasNumber: number;
  isFirstAddClicked = false;
  totalPrice: number;
  typedNumber = 1;
  minOptionCount = 0;
  isClickedOnTopping = false;
  isNumberofPeopleChosen = false;
  @Output() productChange = new EventEmitter();
  @Output() productPriceChange = new EventEmitter();
  curruentTotalPrice: number;
  isNotMinExtrasChecked = false;
  isNotMinToppingsChecked = false;



  ngOnInit() {
    this.configureProductDetails();
  }

  configureProductDetails() {
    if (this.data) {
      this.selectedtProduct = this.data;
      this.toppingMaxNumber = this.selectedtProduct.toppings[0].maximumQuantity;
      this.extrasMaxNumber = this.selectedtProduct.toppings[1].maximumQuantity;
      this.allOptions = this.getOptionsArray(this.selectedtProduct.toppings);
      this.minToppingsNumber = this.selectedtProduct.toppings[0].minimumQuantity;
      this.minExtrasNumber = this.selectedtProduct.toppings[1].minimumQuantity;
    }
  }

  getOptionsArray(toppings) {
    toppings.forEach((el) => {
      this.optionsArray.push(el.options);
    });
    return this.optionsArray;
  }
  addAdditionalToppingsToPrice(event, price) {
    this.isNotMinToppingsChecked = false;
    this.isNotMinExtrasChecked = false;
    this.isClickedOnTopping = true;
    if (event.target.checked) {
      this.toppingsSum = price;
      this.globalPrice = this.globalPrice + this.toppingsSum;
      this.minOptionCount++;
      if (!this.isFirstTypeChecked) {
        this.globalPrice = this.globalPrice + this.selectedtProduct.price;
        this.isFirstTypeChecked = true;
        this.toppingsSum = price;
        this.totalPrice = this.globalPrice;
        this.productsService.totalProductsAmount = this.totalPrice;
        this.curruentTotalPrice = this.totalPrice;
      } else {
        this.totalPrice = this.globalPrice * this.typedNumber;
        this.productsService.totalProductsAmount = this.totalPrice;
        this.curruentTotalPrice = this.totalPrice;
      }
    } else
      if (this.toppingMaxNumber !== 0 || this.extrasMaxNumber !== 0) {
        this.toppingsSum = price;
        this.globalPrice = this.globalPrice - this.toppingsSum;
        this.totalPrice = this.globalPrice * this.typedNumber;
        this.productsService.totalProductsAmount = this.totalPrice;
        this.minOptionCount--;
        this.curruentTotalPrice = this.totalPrice;
        this.productsService.totalProductsAmount = this.curruentTotalPrice;
        const body = {
          totalProductsAmount: this.productsService.totalProductsAmount,
          flag: false
        };
        this.productPriceChange.emit(body);
      }
    this.showErrorAlert();
  }
  addNumberOfPersonsToPrice() {
    this.typedNumber = parseInt(this.numberOfPersons, 10);
    if (this.typedNumber !== 0) {
      this.productChange.emit(this.productsService.noOfProductsSelected++);
      if (!this.isFirstAddClicked) {
        this.totalPrice = (this.toppingsSum + this.selectedtProduct.price) * this.typedNumber;
        this.productsService.totalProductsAmount = this.totalPrice;
        this.isFirstAddClicked = true;
        const body = {
          totalProductsAmount: this.productsService.totalProductsAmount,
          flag: true
        };
        this.productPriceChange.emit(body);
      } else {
        this.totalPrice = this.globalPrice * this.typedNumber;
        this.productsService.totalProductsAmount = this.totalPrice;
        const body = {
          totalProductsAmount: this.productsService.totalProductsAmount,
          flag: true
        };
        this.productPriceChange.emit(body);
        this.curruentTotalPrice = this.totalPrice;
      }
    } else {
      this.globalPrice = 0;
      this.curruentTotalPrice = 0;
    }
  }

  checkNumberOfPeople() {
    if (this.numberOfPersons) {
      this.isNumberofPeopleChosen = true;
    }
  }

  checkButtonStatus() {
    if (this.isNumberofPeopleChosen && (!this.isNotMinExtrasChecked && !this.isNotMinToppingsChecked)) {
      return false;
    } else {
      return true;
    }
  }

  navigateToProductsList() {
    this.router.navigate(['/']);
  }
  showErrorAlert() {
    if (this.minToppingsNumber > 0) {
      if (this.minOptionCount >= this.minToppingsNumber) {
        this.isNotMinToppingsChecked = true;
      }
    }
    if (this.minExtrasNumber > 0) {
      if (this.minOptionCount > 1) {
        this.isNotMinExtrasChecked = false;
      } else {
        if (this.minOptionCount >= this.minExtrasNumber) {
          this.isNotMinExtrasChecked = true;
        }
      }
    }
  }
}


