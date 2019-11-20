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
}
