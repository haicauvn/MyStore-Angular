import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  dataPayment: Payment

  constructor(private router: Router) {
    this.dataPayment = router.getCurrentNavigation()?.extras.state as Payment;
    console.log(this.dataPayment);
  }

  ngOnInit(): void {}
}

export interface Payment {
  address: string;
  creaditCart: number;
  fullName: string;
  phoneNumber: number;
  total: number
}
