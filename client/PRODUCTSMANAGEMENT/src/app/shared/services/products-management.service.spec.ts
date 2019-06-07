import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductsManagementService } from './products-management.service';

describe('ProductsManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ProductsManagementService = TestBed.get(ProductsManagementService);
    expect(service).toBeTruthy();
  });
});
