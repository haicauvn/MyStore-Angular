import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart/service/product-cart.service';
import { OptionModal, ProductListModal } from './product-list.modal';
import { ProductListService } from './service/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: ProductListModal[] = [];
  options: OptionModal[] = [];
  amount: number = 1

  constructor(private productService: ProductListService, private productCartService: ProductCartService) {}

  ngOnInit() {
    this.getListProduct();
    this.getListOption();
  }

  getListProduct() {
    this.productService
      .getListProduct()
      .subscribe((data: ProductListModal[]) => {
        this.products = data;
      });
  }

  getListOption() {
    this.productService.getListOption().subscribe((data: OptionModal[]) => {
      this.options = data;
    });
  }

  addProduct(data: ProductListModal) {
    this.productCartService.addProduct(data, this.amount);
    alert('Added to cart success!')
  }
}
