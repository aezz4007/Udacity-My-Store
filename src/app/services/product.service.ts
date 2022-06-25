import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  constructor(private http: HttpClient) {
    this.products = [];
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../assets/data.json');
  }
}
