import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ProductDetailsComponent } from './product-details.component';
import { NavbarMockComponent } from '../shared/mocks/components/navbar';
import { ProductDetailedCardMockComponent } from '../shared/mocks/components/product-details-card';
import { ProductDetailedContentMockComponent } from '../shared/mocks/components/product-detailed-content';
import { HttpClient, HttpHandler, HttpResponse } from '@angular/common/http';
import { ProductsManagementService } from '../shared/services/products-management.service'
import { ProductsManagementMock } from '../shared/mocks/services/products-management-mock-service'

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent, NavbarMockComponent, ProductDetailedCardMockComponent, ProductDetailedContentMockComponent]
      ,
      providers: [
        HttpClient,
        HttpHandler,
        { provide: ProductsManagementService, useClass: ProductsManagementMock }
      ]
    })
      .compileComponents();
  }));
  const data = [
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
  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    component.allProducts = data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should expect to call getSelectedId and get the selectedt id of the product when component executes ngOnInit lifecycle hook  ',
    inject([ProductsManagementService], (productsService) => {
      spyOn(productsService, 'getProducts').and.callThrough();
      spyOn(productsService, 'getSelectedId').and.callThrough();
      component.ngOnInit();
      expect(productsService.getSelectedId).toHaveBeenCalled();
      expect(productsService.getProducts).toHaveBeenCalled();
      expect(component.selectedProductId).toBeTruthy();
    }));

  it('should expect to call getSelectedProduct when component executes ngOnInit lifecycle hook  ',
    inject([ProductsManagementService], (productsService) => {
      component.selectedProductId = '123456';
      const getSelectedProduct = spyOn(component, 'getSelectedProduct');
      component.ngOnInit();
      expect(getSelectedProduct).toHaveBeenCalled();
    }));

});
