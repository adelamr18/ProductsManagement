import { TestBed } from '@angular/core/testing';

import { ProductsManagementService } from './products-management.service';

describe('ProductsManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsManagementService = TestBed.get(ProductsManagementService);
    expect(service).toBeTruthy();
  });
});
