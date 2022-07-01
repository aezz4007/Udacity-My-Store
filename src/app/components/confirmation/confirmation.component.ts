import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  userData: User;
  total: number;
  constructor(private cartService: CartService) {
      this.total=0;
      this.userData={
        id: 0,
        userName: '',
        userAddress: '',
        cardNumber: '0'
      }
  }

  ngOnInit(): void {
    this.userData = this.cartService.userData;
    this.total = this.cartService.total;
  }
}
