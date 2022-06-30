import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  products: Product[];
  product: Product;
  currentUrl: number = parseInt(window.location.href.substring(window.location.href.lastIndexOf('/')+1));

    constructor(private productService: ProductService, private cartService: CartService) {
    this.products = [];
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
this.productService.getProducts().subscribe(res=>{
      for(let i = 0; i<res.length;i++) {
        const product = res[i];
        product["addedItem"] = 0;
      }
      this.products=res;
      this.product = this.products[this.currentUrl-1];
    });    
  }
    addToCart(): void {
    if (this.product.addedItem === 0) {
      alert(        `Please select the number of items "${this.product.name}" you want to purchase`
      )
    } else {
      this.cartService.addToCart(this.product);
      alert(`${this.product.addedItem} items of "${this.product.name}" were added to cart`);
    }
    }
   
  }


