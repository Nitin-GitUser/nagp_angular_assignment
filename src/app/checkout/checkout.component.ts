import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CheckoutDetails } from './checkout';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutDetails: CheckoutDetails;
  checkoutValidation = false;

  constructor() {
    this.checkoutDetails = new CheckoutDetails();
  }

  ngOnInit(): void {
  }

  onSubmit(checkoutForm: NgForm): void {
    this.checkoutValidation = true;
    localStorage.setItem('cartItems', JSON.stringify([]));
  }

}
