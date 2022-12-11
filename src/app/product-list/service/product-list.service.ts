import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { OptionModal, ProductListModal } from '../product-list.modal';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http: HttpClient) {}

  getListProduct(): Observable<ProductListModal[]> {
    return this.http.get<ProductListModal[]>('../../assets/data.json')
  }

  getListOption(): Observable<OptionModal[]> {
    return this.http.get<OptionModal[]>('../../assets/option.json')
  }
}
