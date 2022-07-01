import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  userData: User;
  productList: Product[];
  total: number;
  constructor() {
    this.productList=[];
    this.total=0;
    this.userData = 
    {
      id: 0,
      userName: '',
      userAddress: '',
      cardNumber: ''
    }
   }
   getCartItems() {
      return this.productList;
}
addToCart(product: Product) {
    const repeated = this.productList.filter(p=>p.id ===product.id);
   
    if (product.addedItem===0) {
      alert(        
        `Please select the number of items "${product.name}" you want to purchase`
      );      
    } else if (repeated.length!==0) {
      alert('You have already added this item to the cart');
    } else {
      this.productList.push(product);
      alert(`${product.addedItem} items of "${product.name}" were added to cart`);
        }
        return this.productList;
      }
removeFromCart(id: number) {
  this.productList=this.productList.filter(p=>p.id !== id);
  alert('Removed from cart!')
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
    this.total += this.total;
    return this.total;
  }
}

