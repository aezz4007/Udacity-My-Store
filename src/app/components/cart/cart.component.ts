import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  total: number;
  cartList: Product[];
  constructor(private cartService: CartService, private productService: ProductService) {
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
  }
  
   removeProduct(id: number) {
      this.cartList = this.cartService.removeFromCart(id);
      alert('Removed from cart');
      return this.cartList;
      
  }

}