import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList: Product[];
  constructor() {
    this.productList=[];
   }
   getCartItems() {
    return this.productList;
}
addToCart(product: Product) {
    this.productList.push(product);
    return this.productList;
}
clearCart() {
    this.productList=[];
    return this.productList;
}

updateProduct(id: number, added: string) {
    this.productList[id].addedItem = added;
  }
}
