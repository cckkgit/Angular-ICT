import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-footer',
  templateUrl: './cart-footer.component.html'

})
export class CartFooterComponent implements OnInit {

  numSubtotal : number = 2000;
  numTax : number = this.numSubtotal * 0.1;

  numTotal : number = this.numSubtotal * 1.1;

  constructor() { }

  ngOnInit() {
  }

}
