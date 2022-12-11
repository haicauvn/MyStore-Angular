import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OptionModal, ProductListModal } from '../product-list.modal';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() products: ProductListModal[] = [];
  @Input() options: OptionModal[] = [];
  @Output() amount: EventEmitter<number> = new EventEmitter();
  @Output() selectProductItem: EventEmitter<ProductListModal> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewDetail(data: ProductListModal) {
    this.router.navigate(['/product-list', data.id]).then();
  }

  selectedAmount(data: any) {
    const amount = Number(data.value)
    this.amount.emit(amount)
  }

  addProduct(data: ProductListModal) {
    this.selectProductItem.emit(data)
  }
}
