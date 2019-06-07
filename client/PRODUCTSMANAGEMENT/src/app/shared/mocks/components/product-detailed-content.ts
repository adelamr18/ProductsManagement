import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-detailed-content',
  template: `
  `
})
export class ProductDetailedContentMockComponent {
  @Input() noOfSelectedProducts: number;
  @Input() amountOfSelectedProducts: number;
  @Input() data: any;
}
