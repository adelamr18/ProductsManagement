import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-product-detailed-card',
  template: `<div class="row">
  <div class="col-12 header-container" *ngFor="let topping of selectedtProduct?.toppings">
    <h6>{{topping?.name}}</h6>
  </div>
</div>
<hr id="seperation-line-title-with-description">
<div class="row image-with-description-container">
  <div class="col-12 col-md-4  product-detail-image">
    <img src="{{selectedtProduct?.productImage}}">
  </div>
  <div class="col-12 col-md-8  product-detail-description">
    <p>{{selectedtProduct?.productDescriptionLong}}</p>
  </div>
</div>
<hr id ="seperation-line-title-with-description">`
})
export class ProductDetailedCardMockComponent {
  @Input() data = [];
  product: any;
  pricePerHead: string;
  viewButton: string;
}
