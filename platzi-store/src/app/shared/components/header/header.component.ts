import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  total$: Observable<string>;

  constructor(private cartService: CartService) {
    this.total$ = this.cartService.cart$.pipe(map(products => products.length.toString()));
  }

  ngOnInit() {}
}
