import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '@core/services/products/products.service';
import { IProduct } from '@core/models/product.model';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<IProduct>;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {}

  ngOnInit() {
    this.product$ = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.productsService.getProduct(params.id);
      })
    );
  }

  createProduct() {
    const newProduct: IProduct = {
      id: '7',
      title: 'New product from angular',
      image: 'assets/images/banner-1.jpg',
      description: 'New product',
      price: 31000
    };

    this.productsService.createProduct(newProduct).subscribe(product => {
      console.log('new product::::', product);
    });
  }

  updateProduct() {
    const editedProduct: Partial<IProduct> = {
      description: 'Edited description',
      price: 31000
    };

    this.productsService.updateProduct('7', editedProduct).subscribe(product => {
      console.log('update product::::', product);
    });
  }

  deleteProduct() {
    this.productsService.deleteProduct('7').subscribe(product => {
      console.log('delete product::::', product);
    });
  }

  getFile() {
    this.productsService.getFile().subscribe(content => {
      console.log('content file::::', content);
    });
  }
}
