import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/product.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: IProduct[];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
  }

  productAddCart(id: number) {
    console.log('productAddCart:::', id);
  }
}
