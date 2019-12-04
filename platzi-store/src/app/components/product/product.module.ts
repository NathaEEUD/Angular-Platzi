import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsContainer } from './containers/products/products.container';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '@material/material.module';

@NgModule({
  declarations: [ProductComponent, ProductDetailComponent, ProductsContainer],
  imports: [CommonModule, ProductRoutingModule, MaterialModule]
})
export class ProductModule {}
