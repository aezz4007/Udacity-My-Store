import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] ;
  constructor(private productService: ProductService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addedItems(product: Product): void {
    alert(`${product.addedItem} items of "${product.name}" were added to cart`);
  }
}
