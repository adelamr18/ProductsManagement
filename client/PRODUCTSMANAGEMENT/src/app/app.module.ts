import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { ProductDetailedCardComponent } from './shared/components/product-detailed-card/product-detailed-card.component';
import { ProductDetailedContentComponent } from './shared/components/product-detailed-content/product-detailed-content.component';
import { ProductsManagementService } from './shared/services/products-management.service';







@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    ProductCardComponent,
    ProductDetailedCardComponent,
    ProductDetailedContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
