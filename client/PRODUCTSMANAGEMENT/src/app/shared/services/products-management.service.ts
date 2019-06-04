import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, Topping, Option } from '../models/product';
import { JSON_PATHS } from '../constants/defines';
import { API } from '../constants/routes-config';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import * as JsonQuery from 'jsonpath/jsonpath';

@Injectable({
  providedIn: 'root'
})
export class ProductsManagementService {
  products: Product[];
  productId: any;
  allProducts: any;
  constructor(private http: HttpClient) {
    this.products = new Array<Product>();
  }

  getAllProducts(): Observable<Product[]> {
    const url = API.products.Data;
    return this.http.get(url).pipe(map((res: any) => {
      return res.map((item => this.mapAllProducts(item)));
    }));
  }

  mapAllProducts(item: any): Product {
    let product = new Product();
    product.productId = JsonQuery.value(item, JSON_PATHS.Product.product_id) || null;
    product.productImage = JsonQuery.value(item, JSON_PATHS.Product.Product_image) || null;
    product.product = JsonQuery.value(item, JSON_PATHS.Product.product) || null;
    product.productDescription = JsonQuery.value(item, JSON_PATHS.Product.product_description) || null;
    product.productDescriptionLong = JsonQuery.value(item, JSON_PATHS.Product.product_description_long) || null;
    product.price = JsonQuery.value(item, JSON_PATHS.Product.price) || null;
    product.grossPrice = JsonQuery.value(item, JSON_PATHS.Product.price_gross) || null;
    product.netPrice = JsonQuery.value(item, JSON_PATHS.Product.price_net) || null;
    product.productVariationId = JsonQuery.value(item, JSON_PATHS.Product.product_variation_id) || null;
    product.numberOfPersons = JsonQuery.value(item, JSON_PATHS.Product.person_number) || null;
    const productToppings = JsonQuery.value(item, JSON_PATHS.Product.toppings) || null;
    if (productToppings) {
      product.toppings = productToppings.map((el) => {
        const options = JsonQuery.value(el, JSON_PATHS.Product.options) || [];
        return new Topping(JsonQuery.value(el, JSON_PATHS.Product.id) || null,
          JsonQuery.value(el, JSON_PATHS.Product.name) || null,
          JsonQuery.value(el, JSON_PATHS.Product.quantity_maximum) || null,
          JsonQuery.value(el, JSON_PATHS.Product.quantity_minimum) || null,
          JsonQuery.value(el, JSON_PATHS.Product.position) || null,
          options.map(op => new Option(
            JsonQuery.value(op, JSON_PATHS.Product.id) || null,
            JsonQuery.value(op, JSON_PATHS.Product.name) || null,
            +JsonQuery.value(op, JSON_PATHS.Product.price) || 0)
          ));
      });
    }
    return product;
  }
  passSelectedId(productId) {
    this.productId = productId;
  }
  getSelectedId() {
    return this.productId;
  }
  returnAllProducts() {
    this.getAllProducts().subscribe((res) => {
      this.allProducts = res;
    });
  }
  getProducts() {
    return this.allProducts;
  }

}
