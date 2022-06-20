import { Component, OnInit } from '@angular/core';
import { Nav } from 'src/app/models/Nav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Product List";
  navBar: Nav[] = [];

  constructor() { }

  ngOnInit(): void {

    this.navBar = [
      {
        navName: "Product List",
        navURL: ""
      },
      {
        navName: "Cart",
        navURL: "cart"
      }
    ];
  }
}
