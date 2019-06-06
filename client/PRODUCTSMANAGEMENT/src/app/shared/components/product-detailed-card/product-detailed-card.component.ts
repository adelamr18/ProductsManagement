import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detailed-card',
  templateUrl: './product-detailed-card.component.html',
  styleUrls: ['./product-detailed-card.component.css']
})
export class ProductDetailedCardComponent implements OnInit {

  constructor() { }
  @Input() data: any;
  selectedtProduct: any;

  ngOnInit() {
    if (this.data) {
      this.selectedtProduct = this.data;

    }
  }

}
