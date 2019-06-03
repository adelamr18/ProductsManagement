import { Component, OnInit, Input } from '@angular/core';
import { ProductsManagementService } from '../shared/services/products-management.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(public productsService: ProductsManagementService) { }
  products: any;
  @Input() responseData: any;
  ngOnInit() {
    this.productsService.getAllProducts().subscribe((res) => {
      this.products = res;
    });
  }

}
