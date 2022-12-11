import {Injectable} from '@angular/core';
import { ProductListModal } from 'src/app/product-list/product-list.modal';

@Injectable({
  providedIn: 'root',
})
export class ProductCartService {

  carts: ProductListModal[] = [];

  constructor() {}

  addProduct(data: ProductListModal, amount: number) {
    if (this.carts.length > 0) {
      const findCart = this.carts.find((item:ProductListModal) => item.id === data.id)
      if (findCart) {
        findCart.amount = findCart.amount! + amount
        return this.carts
      } else {
        return this.carts.push({...data, amount: amount})
      }
    } else {
      return this.carts.push({...data, amount: amount})
    }
  }

}