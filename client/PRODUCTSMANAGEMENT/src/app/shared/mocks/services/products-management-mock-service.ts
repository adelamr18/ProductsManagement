import { of } from 'rxjs/internal/observable/of';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
export class ProductsManagementMock {

  products: Product[];
  productId: any;
  allProducts = [
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
  totalProductsAmount = 0;
  noOfProductsSelected = 1;
  tempTotalProducts = 12;
  parentNavbarNumberOfproducts = 1;
  parentNavbarTotalPrice = 15;
  noOfSelectedProducts: 4;

  data = [
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
  getAllProducts() {
    return of(this.data);
  }

  mapAllProducts() {
    return new Product();

  }

  passSelectedId() {

  }

  getSelectedId() {
    return 1;
  }
  returnAllProducts() {

  }
  getProducts() {
    return [
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
  }

  keepTrackOfTotalProductsPrice() {

  }

  getSelectedProduct() {
    return this.data;

  }


  getcurrentTempPrice() {
    return this.tempTotalProducts;
  }







}
