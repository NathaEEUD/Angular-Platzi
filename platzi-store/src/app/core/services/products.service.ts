import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private URL = 'http://platzi-store.herokuapp.com/products/';
  products: IProduct[];

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<IProduct[]>(this.URL);
  }

  getProduct(id: string) {
    return this.http.get<IProduct>(this.URL + id);
  }
}
