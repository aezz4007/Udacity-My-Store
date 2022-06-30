import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList: Product[];
  total: number;
  constructor() {
    this.productList=[];
    this.total=0;
   }
   getCartItems() {
      return this.productList;
}
addToCart(product: Product) {
    if (product.addedItem!==0) {
      this.productList.push(product);
      return this.productList;
    } else {
      return this.productList;
    }
    
}

removeFromCart(id: number) {
  this.productList=this.productList.filter(p=>p.id !== id);
  return this.productList;
}

updateProduct(id: number, added: number) {
    this.productList[id].addedItem = added;
    this.calcTotal();
  }

  calcTotal(): number {
   
    for(let i=0;i<this.productList.length;i++) {
      this.total = this.productList[i].price * this.productList[i].addedItem;
    }
    return this.total;
  }
}

