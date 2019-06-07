import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ProductDetailedContentComponent } from './product-detailed-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHandler, HttpResponse } from '@angular/common/http';



describe('ProductDetailedContentComponent', () => {
  let component: ProductDetailedContentComponent;
  let fixture: ComponentFixture<ProductDetailedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ProductDetailedContentComponent],
      providers: [
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        },
        HttpClient, HttpHandler
      ]
    })
      .compileComponents();
  }));
  const data = {
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
  };
  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailedContentComponent);
    component = fixture.componentInstance;
    component.data = data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should expect to set the different properties of each selected product for example
  setting the selected product to be equal to the data which is sent by the parent component which is the product-details.component
  , setting toppingMaxNumber for each product ,etc..  `
    , () => {
      expect(component.selectedtProduct).toEqual(data);
    });
  it(`it should expect to set the flags isNotMinToppingsChecked,isNotMinExtrasChecked to false and
  isClickedOnTopping to true when addAdditionalToppingsToPrice is called `
    , () => {
      const event = {
        target: {
          checked: true
        },
        path: [{
        }, {}, { id: 'collapseOne' }
        ]
      };
      component.addAdditionalToppingsToPrice(event, 18);
      expect(component.islickedOnToppingsTab).toBeTruthy();
      expect(component.isNotMinToppingsChecked).toBeFalsy();
      expect(component.isNotMinExtrasChecked).toBeFalsy();
      expect(component.isClickedOnTopping).toBeTruthy();
    });
  it(`should expect to set toppingsSum to the price of the removed topping or extra side item whenaddAdditionalToppingsToPrice is
  called when the user unselects a topping or an extra item    `
    , () => {
      const event = {
        target: {
          checked: false
        },
        path: [{
        }, {}, { id: 'collapseOne' }
        ]
      };
      component.addAdditionalToppingsToPrice(event, 18);
      expect(component.toppingsSum).toEqual(18);
    });

  it(`should expect to navigate to productsListPage when navigateToProductsList method is called
      `, (inject([Router], (router: Router) => {
    component.navigateToProductsList();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  })));



  it(`should expect to recalculate totalPrice when a user selects a second topping or a second extra
  `, (inject([Router], (router: Router) => {
    component.isFirstTypeChecked = true;
    const event = {
      target: {
        checked: true
      },
      path: [{
      }, {}, { id: 'collapseOne' }
      ]
    };
    component.addAdditionalToppingsToPrice(event, 18);
    expect(component.totalPrice).toBeTruthy();
  })));

  it(`should expect to set the flag for showing an alert to true for the topping tab is if the required number of
  toppings tabs are not selected by the user
  `, () => {
      component.minToppingsNumber = 1;
      component.minOptionCount = 2;
      component.minToppingsNumber = 1;
      component.showErrorAlertForToppings();
      expect(component.isNotMinToppingsChecked).toBeTruthy();
    });
});
