import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsManagementService } from '../../services/products-management.service';
import { buttons, pricePerHead, alerts, priceInformation, productDetailsHeadlines, tabsSeperatingId } from '../../constants/defines'


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
  addButton: string;
  pricePerHead: string;
  selectText: string;
  isRequiredText: string;
  mustSelectText: string;
  toppingsText: string;
  priceInformation: string;
  extrasText: string;
  toppingsTextHeadline: string;
  atLeastText: string;
  errorText: string;
  personsText: string;
  specialInstructionsText: string;
  islickedOnToppingsTab = false;
  toppingTabId: string;
  isClickedOnAnyChecbox = false;
  ngOnInit() {
    this.configureProductDetails();
    this.configureProductDetailsText();
  }
  configureProductDetailsText() {
    this.addButton = buttons.addButton;
    this.pricePerHead = pricePerHead.pricePerHead;
    this.selectText = alerts.select;
    this.isRequiredText = alerts.isRequired;
    this.mustSelectText = alerts.mustSelect;
    this.toppingsText = alerts.toppings;
    this.priceInformation = priceInformation.priceInformation;
    this.extrasText = productDetailsHeadlines.extras;
    this.toppingsTextHeadline = productDetailsHeadlines.toppings;
    this.atLeastText = alerts.atLeast;
    this.errorText = alerts.errorText;
    this.personsText = productDetailsHeadlines.persons;
    this.specialInstructionsText = productDetailsHeadlines.specialInstructions;
    this.toppingTabId = tabsSeperatingId.toppingTab;
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
    if (event.path[2].id.toString() === this.toppingTabId) {
      this.islickedOnToppingsTab = true;
    } else {
      this.islickedOnToppingsTab = false;
    }
    this.isNotMinToppingsChecked = false;
    this.isNotMinExtrasChecked = false;
    this.isClickedOnTopping = true;
    if (event.target.checked) {
      this.isClickedOnAnyChecbox = true;
      this.toppingsSum = price;
      this.globalPrice = this.globalPrice + this.toppingsSum;
      if (this.minExtrasNumber > 0 && !this.islickedOnToppingsTab) {
        this.minOptionCount++;
      }
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
        if (this.minExtrasNumber > 0 && !this.islickedOnToppingsTab) {
          this.minOptionCount--;
        }
        this.curruentTotalPrice = this.totalPrice;
        this.productsService.totalProductsAmount = this.curruentTotalPrice;
        const body = {
          totalProductsAmount: this.productsService.totalProductsAmount,
          flag: false
        };
        this.productPriceChange.emit(body);
      }
    this.showErrorAlertForToppings();
    this.showErrorAlertForExtras();
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
    if (parseInt(this.numberOfPersons, 10) > 0) {
      this.isNumberofPeopleChosen = true;
    } else {
      this.isNumberofPeopleChosen = false;
    }
  }

  checkButtonStatus() {
    if (this.isClickedOnAnyChecbox) {
      if (this.isNumberofPeopleChosen && (!this.isNotMinExtrasChecked && !this.isNotMinToppingsChecked)) {
        return false;
      }
    } else {
      return true;
    }
    return true;
  }

  navigateToProductsList() {
    this.router.navigate(['/']);
  }
  showErrorAlertForToppings() {
    if (this.minToppingsNumber > 0) {
      if (this.minOptionCount >= this.minToppingsNumber) {
        this.isNotMinToppingsChecked = true;
      }
    } else {
      this.isNotMinToppingsChecked = false;
    }
  }
  showErrorAlertForExtras() {
    if (this.minOptionCount === 0 && !this.islickedOnToppingsTab) {
      this.isNotMinExtrasChecked = true;
    }
    if (this.minExtrasNumber > 0) {
      if (this.minOptionCount > 1) {
        this.isNotMinExtrasChecked = false;
      } else {
        if (this.minOptionCount === 1) {
          this.isNotMinExtrasChecked = false;
        }
        if (this.minOptionCount > this.minExtrasNumber) {
          this.isNotMinExtrasChecked = true;
        }
        if (this.minOptionCount === 0) {
          this.isNotMinExtrasChecked = true;
        }
      }
    }
  }
}


