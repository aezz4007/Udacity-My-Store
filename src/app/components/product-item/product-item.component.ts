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
  NumberOfItems: Array<number>;
  count: number;
  constructor(private cartService: CartService) {
    this.NumberOfItems = [];
    this.count = 0;
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
    this.NumberOfItems = Array.from(Array(11).keys());
  }

  changeCount(e: Event) {
    this.count = parseInt((<HTMLSelectElement>e.target).value);
  }

  addToCart(product: Product) {
    if (this.count !== 0) {
      this.product.addedItem = this.count;
      this.added.emit(this.product);
      this.cartService.addToCart(this.product);
    } else {
      alert(
        `Please select the number of items "${this.product.name}" you want to purchase`
      );
    }
  }
}
