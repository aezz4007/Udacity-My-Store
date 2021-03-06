import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  userData: User;
  total: number;
  cartList: Product[];
  constructor(private cartService: CartService, private productService: ProductService, private router: Router) {
    this.userData = 
    {
      id: 0,
      userName: '',
      userAddress: '',
      cardNumber: ''
    }
    this.total=0;
    this.cartList = [
      {id: 0,
      name: '',
      price: 0,
      url: 'https://www.example.com',
      description: '',
      addedItem: 0
      }
    ];
  }

  ngOnInit(): void {
    this.cartList = this.cartService.getCartItems();
    this.userData=this.cartService.userData;
    this.total=this.cartService.calcTotal();

    //reset form data
    this.userData.userName='';
    this.userData.userAddress='';
    this.userData.cardNumber='';
  }
  //remove product from cart  
   removeProduct(id: number) : Product[] {
      this.cartList = this.cartService.removeFromCart(id);
      this.total=this.cartService.calcTotal();
      return this.cartList;
  }
  // move to confirmation page and reset cart
 onSubmit(): void {
  if(this.total !==0) {
  
    this.router.navigateByUrl('/confirmation');
    this.cartList=[];
    this.cartService.productList=[];
    
  } else {
    alert('You haven\'t selected any item to buy');
  }
 
}
// recalculate total on change
changeAdded(added: number): void {
  this.total = this.cartService.calcTotal();
}
}