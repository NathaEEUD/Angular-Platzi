import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: IProduct[];

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<IProduct[]>(environment.url_api);
  }

  getProduct(id: string) {
    return this.http.get<IProduct>(environment.url_api + id);
  }

  createProduct(product: IProduct) {
    return this.http.post(environment.url_api, product);
  }

  updateProduct(id: string, editedProduct: Partial<IProduct>) {
    return this.http.put(environment.url_api + id, editedProduct);
  }

  deleteProduct(id: string) {
    return this.http.delete<IProduct>(environment.url_api + id);
  }
}
