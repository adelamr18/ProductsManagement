import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ProductsListComponent } from './products-list.component';
import { ProductDetailedCardMockComponent } from '../shared/mocks/components/product-details-card';
import { ProductDetailedContentMockComponent } from '../shared/mocks/components/product-detailed-content';
import { ProductCardMockComponent } from '../shared/mocks/components/product-card';

import { HttpClient, HttpHandler, HttpResponse } from '@angular/common/http';
import { ProductsManagementService } from '../shared/services/products-management.service'
import { ProductsManagementMock } from '../shared/mocks/services/products-management-mock-service'
describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsListComponent, ProductDetailedContentMockComponent,
        ProductDetailedCardMockComponent, ProductCardMockComponent],
      providers: [HttpClient, HttpHandler,
        { provide: ProductsManagementService, useClass: ProductsManagementMock }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should expect to call getAllProducts when component executes ngOnInit and get all products from products managements service',
    inject([ProductsManagementService], (productsService) => {
      spyOn(productsService, 'getAllProducts').and.callThrough();
      component.ngOnInit();
      expect(productsService.getAllProducts).toHaveBeenCalled();
      expect(component.products).toBeTruthy();
    }));
  it('should expect to call configureAllProducts and configureShoppingCart when component executes ngOnInit lifecycle hook',
    inject([ProductsManagementService], (productsService) => {
      const configureAllProducts = spyOn(component, 'configureAllProducts');
      const configureShoppingCart = spyOn(component, 'configureShoppingCart');
      component.ngOnInit();
      expect(configureAllProducts).toHaveBeenCalled();
      expect(configureShoppingCart).toHaveBeenCalled();
    }));
  it(`should expect to set noOfProductsSelected  to  the number of products selected in the products managament service and
   set totalProductsPrice to the total price of products in the product management service `,
    inject([ProductsManagementService], (productsService) => {
      component.configureAllProducts();
      expect(component.noOfProductsSelected).toEqual(1);
      expect(component.totalProductsPrice).toEqual(15);
    }));



});
