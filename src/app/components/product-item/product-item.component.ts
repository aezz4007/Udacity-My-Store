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
  constructor(private cartService: CartService) {
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
  }

  addToCart(product: Product) {
 
    if (this.product.addedItem === 0) {

      alert(        
        `Please select the number of items "${this.product.name}" you want to purchase`
      )
    } else {
      this.cartService.addToCart(this.product);
      this.added.emit(this.product);
    }
    }
  }

