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
  //get the last part of current URL of the page, containing page number
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
    //grab the product list from products service
this.productService.getProducts().subscribe(res=>{
      for(let i = 0; i<res.length;i++) {
        const product = res[i];
        product["addedItem"] = 0;
      }
      this.products=res;
      // the product has the same id as the page number
      this.product = this.products[this.currentUrl-1];
    });    
  }
  // add the product to cart
    addToCart(): void {
   
      this.cartService.addToCart(this.product);
    }
    }
   
  


