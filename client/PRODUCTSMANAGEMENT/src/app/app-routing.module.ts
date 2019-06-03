import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', component: ProductsListComponent, pathMatch: 'full' },
  { path: 'product', component: ProductsListComponent },
  { path: 'productDetail/:id', component: ProductDetailsComponent },
  { path: '**', redirectTo: 'product' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
