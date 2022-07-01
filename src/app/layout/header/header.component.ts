import { Component, OnInit } from '@angular/core';
import { Nav } from 'src/app/models/Nav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Product List';
  navBar: Nav[];

  constructor() {
    this.navBar = [];
  }

  ngOnInit(): void {
    // A navigation bar which is customizable, items can be added or removed from this array
    this.navBar = [
      {
        navName: 'Product List',
        navURL: ''
      },
      {
        navName: 'Cart',
        navURL: 'cart'
      }
    ];
  }
}
