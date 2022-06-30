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
  }
  ngOnDestroy(): void {
    this.userData={
      id: 0,
      userName: '',
      userAddress: '',
      cardNumber: ''
    }
  }
  
   removeProduct(id: number) {
      this.cartList = this.cartService.removeFromCart(id);
      alert('Removed from cart');
      return this.cartList;
      
  }
btnClick() {
  this.userData.id=0;
  this.userData.userName=''
 this.userData.userAddress = '';
 this.userData.cardNumber='';
   this.router.navigateByUrl('/confirmation');
}

}