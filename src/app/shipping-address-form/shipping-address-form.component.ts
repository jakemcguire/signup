import { Component, OnInit } from '@angular/core';

import { Address } from '../address';

@Component({
  selector: 'app-shipping-address-form',
  templateUrl: './shipping-address-form.component.html',
  styleUrls: ['./shipping-address-form.component.css']
})
export class ShippingAddressFormComponent implements OnInit {

	model = new Address('test', '', '', '', '');

  constructor() { }

  ngOnInit() {
  }

}
