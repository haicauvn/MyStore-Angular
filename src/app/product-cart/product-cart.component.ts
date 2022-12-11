import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductListModal } from '../product-list/product-list.modal';
import { ProductCartService } from './service/product-cart.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  carts: ProductListModal[] = []
  total: number = 0

  formCart = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(25)]),
    address: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]),
    phoneNumber: new FormControl('', [Validators.required]),
    creaditCart: new FormControl('', [Validators.required]),
  })

  constructor(private productCartService: ProductCartService, private router: Router) { }

  ngOnInit(): void {
    this.getListCart();
    this.getTotal()
  }

  getListCart() {
    this.carts = this.productCartService.carts
  }

  getTotal() {
   const totals = [];
    if (this.carts.length > 0) {
      for (let i = 0; i < this.carts.length; i++) {
        totals.push(this.carts[i].amount! * this.carts[i].price);
      }
    }
    return this.total = totals.length > 0 ? totals.reduce((a: number, b: number) => a + b) : 0;
  }

  deleteItem(id: number) {
    const product = this.carts.find((item: ProductListModal) => item.id === id)
    if (product) {
      const index = this.carts.indexOf(product)
      this.carts.splice(index,1)
    }
    this.getTotal()
    alert('Delete product success!')
  }

  changeAmount(data: any, product: ProductListModal) {
    const amount = Number(data.value)
    const findCart = this.carts.find((item:ProductListModal) => item.id === product.id);
    if (findCart && amount >= 1) {
      findCart.amount = amount
      this.getTotal()
    } if (!amount && findCart) {
      findCart.amount = 1
      this.getTotal()
    }
  }

  onSubmit() {
    this.router.navigate(['payment'], {state: {...this.formCart.value, total: this.total}})
  }

}
