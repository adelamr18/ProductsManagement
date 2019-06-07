import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-navbar',
  template: `<h5><nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a (click)="navigateToProductsList()" class="navbar-brand" >{{homeNav}}</a>
  <span id = "product-numbers">{{ noOfSelectedProducts}}</span>
  <div class="shopping-cart-container">
      <i class="fa fa-shopping-cart"></i>
      <span id="shopping-text">{{cartHome}}</span>
      <span id="total-cost-text">  {{cartAmount}} {{amountOfSelectedProducts}} </span>
    </div>
</nav></h5>`
})
export class NavbarMockComponent {
  @Input() noOfSelectedProducts: number;
  @Input() amountOfSelectedProducts: number;
}
