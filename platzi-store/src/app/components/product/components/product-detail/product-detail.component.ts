import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { IProduct } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const { id } = params;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe(product => {
      this.product = product;
      console.log('product::::', product);
    });
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
}
