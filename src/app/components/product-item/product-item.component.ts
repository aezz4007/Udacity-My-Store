import { Component, OnInit, Input } from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { count } from 'rxjs';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  NumberOfItems: Array<number> = [];
  count: string;
  constructor() {
    this.count = '';
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: 'https://www.example.com',
      description: '',
      addedItem: '0'
    }
  }

  ngOnInit(): void {
    this.NumberOfItems = Array.from(Array(11).keys());
  }
    
  changeCount(e: any) {
    this.count = e.target.value;
    }

  addToCart() {
    if (this.count !==''){
      this.product.addedItem = this.count;
      alert(`${this.product.addedItem} ${this.product.name} were added to cart`);  
    }
    else {
      alert(`Please select the number of ${this.product.name} you want to purchase`)
    }
  }
}

