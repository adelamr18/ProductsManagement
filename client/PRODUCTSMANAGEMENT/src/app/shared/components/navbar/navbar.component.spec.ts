import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { Router } from '@angular/router';
import { RouterServiceMock } from '../../mocks/services/router-mock-service';
import { HttpClient, HttpHandler, HttpResponse } from '@angular/common/http';
import { ProductsManagementService } from '../../services/products-management.service';
import { ProductsManagementMock } from '../../mocks/services/products-management-mock-service';
import { shoppingCart, homeNav } from '../../constants/defines';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
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

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should expect to call showCartTotalPrice,showCartTotalPrice and c
  onfigureShoppingCartAndHomeNavigation when component executes ngOnInit lifecycle hook `
    , () => {
      const showCartTotalPrice = spyOn(component, 'showCartTotalPrice');
      const showCartSelectedProducts = spyOn(component, 'showCartSelectedProducts');
      const configureShoppingCartAndHomeNavigation = spyOn(component, 'configureShoppingCartAndHomeNavigation');
      component.ngOnInit();
      expect(showCartTotalPrice).toHaveBeenCalled();
      expect(showCartSelectedProducts).toHaveBeenCalled();
      expect(configureShoppingCartAndHomeNavigation).toHaveBeenCalled();
    });
  it(`should expect to navigate to productsListPage when navigateToProductsList method is called
  and call passProductCountData and passProductsPricesData   `, (inject([Router], (router: Router) => {
    const passProductCountData = spyOn(component, 'passProductCountData');
    const passProductsPricesData = spyOn(component, 'passProductsPricesData');
    component.navigateToProductsList();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
    expect(passProductCountData).toHaveBeenCalled();
    expect(passProductsPricesData).toHaveBeenCalled();
  })));

  it(`should expect to set amountOfSelectedProducts to  amountOfSelectedProducts
   if currentTempPrices is lower then  amountOfSelectedProducts
  which is being passed by the parent component product-details-component.ts when showCartTotalPrice is called
   `, inject([ProductsManagementService], (productsService) => {
    component.amountOfSelectedProducts = 10;
    component.showCartTotalPrice();
    expect(component.amountOfSelectedProducts).toBe(10);
  }));

  it(`should expect to set currentTempCount to  zero when noOfProductsSelected is equal to
  1 as it is assigned in the productsmanagement mock service
  and whenpassProductCountData is called
   `, inject([ProductsManagementService], (productsService) => {
    component.passProductCountData();
    expect(component.currentTempCount).toEqual(0);
  }));
  it(`should expect to set cartAmount,cartHome and homeNav with their correct texts imported from the defines
  file when configureShoppingCartAndHomeNavigation is called
   `, () => {
      component.configureShoppingCartAndHomeNavigation();
      expect(component.cartAmount).toEqual('Amount:');
      expect(component.cartHome).toEqual('Cart');
      expect(component.homeNav).toEqual('Home');
    });

});
