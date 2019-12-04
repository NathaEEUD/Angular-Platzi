import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '@core/models/product.model';
import { CartService } from '@core/services/cart/cart.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  products$: Observable<IProduct[]>;

  constructor(private cartService: CartService) {
    // this.products$ = this.cartService.cart$.pipe(
    //   map((products: IProduct[]) => [...new Set(products)])
    // );
    this.products$ = this.cartService.cart$;
  }

  ngOnInit() {}
}
