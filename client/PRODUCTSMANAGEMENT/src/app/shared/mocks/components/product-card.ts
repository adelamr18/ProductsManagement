import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
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
export class ProductCardMockComponent {

  selectedtProduct = {
    productDescriptionLong: ' ',
    productImage: '',
    toppings: ''
  };

  @Input() data = [
    {
      product_id: '123456',
      Product_image: 'https://via.placeholder.com/500x300/f98e71/fff&text=Image',
      product: 'Caterwings Breakfast Package: Bagels and OJ',
      product_description: 'A very fine product which is really fresh and really good to eat with perons so enjoy and have fun',
      product_description_long: 'Hello this is the awesome package for breakfast brought you by the finest of chefs',
      price: 7,
      price_gross: 840,
      price_net: 700,
      product_variation_id: 37468,
      person_number: 20,
      toppings: [
        {
          id: 3860,
          name: 'Haridy',
          quantity_minimum: 0,
          quantity_maximum: 2,
          position: 1,
          options: [
            {
              id: '7923',
              name: 'Smoked salmon, cream cheese & dill bagel - (COLD)',
              price: '0.00',
              keys: 'ddd'
            },
            {
              id: '7924',
              name: 'Gluten free - crushed avocado and tomato bagel - (COLD)',
              price: '0.00',
              keys: 'ddd'
            },
            {
              id: '7925',
              name: 'Salt beef with gherkin and honey mustard mayo bagel',
              price: '2.00',
              keys: 'ddd'
            },
            {
              id: '7926',
              name: 'Sucuk, halloumi and rocket bagel - (HOT)',
              price: '1.50',
              keys: 'ddd'
            }
          ]
        },
        {
          id: 5461,
          name: 'Breakfast Packages Orange Juice',
          quantity_minimum: 1,
          quantity_maximum: 1,
          position: 9,
          options: [
            {
              id: '15786',
              name: 'Tropicana Orange Juice',
              price: '0.00'
            }
          ]
        }
      ]
    },
  ];
  product: any;
  pricePerHead: string;
  viewButton: string;
}
