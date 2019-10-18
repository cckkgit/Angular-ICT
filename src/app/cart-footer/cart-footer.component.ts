import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-cart-footer',
  templateUrl: './cart-footer.component.html'

})
export class CartFooterComponent  {

  @Input() promoCode: string ; 
  @Input() numSubtotal: number ; 
  @Input() numTax: number ; 
  @Input() numTotal: number ; 




  applyPromoCode (){
    console.log(this.promoCode);
    if(this.promoCode==='Mua Thu'){
      alert("Ban duoc giam gia 30%");
    } else {
      alert("Sai ma giam gia");
    }
  }

}
