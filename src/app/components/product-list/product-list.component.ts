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
    this.productService.getProducts().subscribe(res=>{
      for(let i = 0; i<res.length;i++) {
        const product = res[i];
        product["addedItem"] = 0;
      }
      this.products=res;
    });
  }
}
