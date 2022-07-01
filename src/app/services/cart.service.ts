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
   // All items in the cart
   getCartItems(): Product[] {
      return this.productList;
}
// Add items to cart
addToCart(product: Product): Product[] {
  // avoid adding product more than once
    const repeated = this.productList.filter(p=>p.id ===product.id);
   
    if (product.addedItem===0) {
      alert(        
        `Please select the number of items "${product.name}" you want to purchase`
      );     
      // Avoid adding a product with 0 number of items 
    } else if (repeated.length!==0) {
      alert('You have already added this item to the cart');
    } else {
      // add product to cart
      this.productList.push(product);
      alert(`${product.addedItem} items of "${product.name}" were added to cart`);
        }
        return this.productList;
      }
      // remove product from cart
removeFromCart(id: number): Product[] {
  this.productList=this.productList.filter(p=>p.id !== id);
  alert('Removed from cart!')
  return this.productList;
}
// to update the addedItem property 
updateProduct(id: number, added: number): void {
    this.productList[id].addedItem = added;
  }
// Calculate the total price displayed in the cart
  calcTotal(): number {
    this.total=0;
    // Iterate over cart list and add price*number of items of each product
    for(let i=0;i<this.productList.length;i++) {
      let itemTotal = this.productList[i].price * this.productList[i].addedItem;
      this.total += itemTotal;
    }
    return this.total;
  }
}

