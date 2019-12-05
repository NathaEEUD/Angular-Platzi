import { Injectable } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: IProduct[];

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(environment.url_api)
      .pipe(retry(1), catchError(this.handleError));
  }

  getProduct(id: string) {
    return this.http.get<IProduct>(environment.url_api + id).pipe(catchError(this.handleError));
  }

  createProduct(product: IProduct) {
    return this.http.post(environment.url_api, product).pipe(catchError(this.handleError));
  }

  updateProduct(id: string, editedProduct: Partial<IProduct>) {
    return this.http
      .put(environment.url_api + id, editedProduct)
      .pipe(catchError(this.handleError));
  }

  deleteProduct(id: string) {
    return this.http.delete<IProduct>(environment.url_api + id).pipe(catchError(this.handleError));
  }

  getFile() {
    return this.http.get('assets/files/test.txt', { responseType: 'text' });
  }

  private handleError(error: HttpErrorResponse) {
    console.log('handleError::::', error);
    let errorMessage;

    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
