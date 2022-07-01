import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() added = new EventEmitter();
  cartList: Product[];
  constructor(private cartService: CartService) {
    this.cartList = [];
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: 'https://www.example.com',
      description: '',
      addedItem: 0
    };
  }

  ngOnInit(): void {
    this.cartList = this.cartService.getCartItems();
  }

  addToCart(product: Product): void {
   
        this.cartService.addToCart(product);
        this.added.emit(product);
      }
    }
  

