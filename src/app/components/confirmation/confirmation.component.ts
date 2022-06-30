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
  constructor(private cartService: CartService) {
      this.userData={
        id: 0,
        userName: '',
        userAddress: '',
        cardNumber: '0'
      }
  }

  ngOnInit(): void {
    this.userData = this.cartService.userData;
  }
}
