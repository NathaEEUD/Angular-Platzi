import { Component, OnInit } from '@angular/core';
import { IProduct } from '@core/models/product.model';
import { ProductsService } from '@core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ProductsContainer implements OnInit {
  products: IProduct[];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  productAddCart(id: number) {
    console.log('productAddCart:::', id);
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe(
      products => {
        this.products = products;
      },
      error => {
        console.error('fetchProducts error::::', error);
      }
    );
  }
}
