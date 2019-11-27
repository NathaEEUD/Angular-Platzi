import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { IProduct } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: IProduct;
  @Output() eventAddCart: EventEmitter<any> = new EventEmitter();

  constructor(private cartService: CartService) {
    console.log('1. Product component constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('2. Product component ngOnChanges changes::::', changes);
  // }

  ngOnInit() {
    console.log('3. Product component ngOnInit');
  }

  ngDoCheck() {
    console.log('4. Product component ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('5. Product component ngOnDestroy');
  }

  addCart() {
    console.log('Add to cart');
    // this.eventAddCart.emit(this.product.id);
    this.cartService.addCart(this.product);
  }
}
