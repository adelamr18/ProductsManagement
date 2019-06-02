import { Component, OnInit } from '@angular/core';
import { ProductsManagementService } from '../shared/services/products-management.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(public productsService: ProductsManagementService) { }
  results: any;
  ngOnInit() {
    this.productsService.getAllProducts().subscribe((res) => {
      this.results = res;
      console.log(this.results, 'your mapped results')
    });
  }

}
