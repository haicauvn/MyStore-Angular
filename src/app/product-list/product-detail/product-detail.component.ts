import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCartService } from 'src/app/product-cart/service/product-cart.service';
import { OptionModal, ProductListModal } from '../product-list.modal';
import { ProductListService } from '../service/product-list.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productItem?: ProductListModal;
  options: OptionModal[] = [];
  amount: number = 1
  constructor(
    private productService: ProductListService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private productCartService: ProductCartService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.productService
      .getListProduct()
      .subscribe((data: ProductListModal[]) => {
        this.productItem = data.find((item) => item.id === Number(id));
      });
    this.getListOption();
  }

  getListOption() {
    this.productService.getListOption().subscribe((data: OptionModal[]) => {
      this.options = data;
    });
  }

  selectedAmount(data: any) {
    this.amount = Number(data.value);
  }

  addProduct(data: ProductListModal) {
    this.productCartService.addProduct(data, this.amount);
    alert('Added to cart success');
  }
}
