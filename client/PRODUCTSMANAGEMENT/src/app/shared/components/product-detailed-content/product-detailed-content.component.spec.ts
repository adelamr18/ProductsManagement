import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailedContentComponent } from './product-detailed-content.component';

describe('ProductDetailedContentComponent', () => {
  let component: ProductDetailedContentComponent;
  let fixture: ComponentFixture<ProductDetailedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
