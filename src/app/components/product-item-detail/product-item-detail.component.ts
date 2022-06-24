import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  products: Product[];
  product: Product;
  currentUrl: number = parseInt(window.location.href.substring(window.location.href.lastIndexOf('/')+1));

  NumberOfItems: Array<number>;
  count: string;

  constructor(private productService: ProductService) {
    this.products = [];
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: 'https://www.example.com',
      description: '',
      addedItem: '0'
    };

    this.NumberOfItems = [];
    this.count = '';
  }

  ngOnInit(): void {
    this.products=this.productService.getProducts(); 
    this.NumberOfItems = Array.from(Array(11).keys());
    this.product = 
      {
        id: this.products[this.currentUrl-1].id,
        name: this.products[this.currentUrl-1].name,
        price: this.products[this.currentUrl-1].price,
        url: this.products[this.currentUrl-1].url,
        description: this.products[this.currentUrl-1].description
      }
    
  }
  changeCount(e: Event) {
    this.count = (<HTMLSelectElement>e.target).value;
  }

  addToCart() {
    if (this.count !== '') {
      this.product.addedItem = this.count;
      this.productService.updateProduct(this.product.id-1, this.product.addedItem);
        } else {
      alert(
        `Please select the number of items "${this.product.name}" you want to purchase`
      );
  }
  }

}
