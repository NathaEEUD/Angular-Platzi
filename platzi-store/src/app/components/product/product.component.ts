import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;
  @Output() eventAddCart: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addCart() {
    console.log('Add to cart');
    this.eventAddCart.emit(this.product.id);
  }
}
