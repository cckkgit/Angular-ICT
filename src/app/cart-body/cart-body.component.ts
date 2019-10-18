import { Component, OnInit } from '@angular/core';

import { Product } from '../product.module';

@Component({
  selector: 'app-cart-body',
  templateUrl: './cart-body.component.html'

})
export class CartBodyComponent  {

removeProduct (id: number){
const index = this.products.findIndex( product => product.id === id);
if (index !== -1){
  this.products.splice(index,1);
}

}

products : Product[ ] = [
  {
    id: 1,
    name: 'Tram Anh',
    description: 'Tram Anh - Desc',
    image: 'https://vnn-imgs-f.vgcloud.vn/2019/07/23/17/hot-girl-tram-anh-lan-dau-check-in-mang-xa-hoi-sau-3-thang-im-lang.jpg',
    price: 100,
    quantity: 1,
    
    },
    {
      id: 2,
      name: 'Product 222',
      description: 'Product 2222 - description',
      image: 'https://sohanews.sohacdn.com/thumb_w/660/2019/7/12/md2-1562891851115558272486-crop-15628919196612015334639.jpg',
      price: 200,
      quantity: 3,
      
      }
]

}
