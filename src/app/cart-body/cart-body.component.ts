import { Component, OnInit } from '@angular/core';

import { Product } from '../product.module';

@Component({
  selector: 'app-cart-body',
  templateUrl: './cart-body.component.html'

})
export class CartBodyComponent  {

  

products : Product[ ] = [
  {
    id: 1,
    name: 'Tram Anh',
    description: 'Tram Anh - Desc',
    image: 'https://vnn-imgs-f.vgcloud.vn/2019/07/23/17/hot-girl-tram-anh-lan-dau-check-in-mang-xa-hoi-sau-3-thang-im-lang.jpg',
    price: 100000000,
    quantity: 1,
    
    },
    {
      id: 2,
      name: 'Mi du',
      description: 'Product 2222 - description',
      image: 'https://sohanews.sohacdn.com/thumb_w/660/2019/7/12/md2-1562891851115558272486-crop-15628919196612015334639.jpg',
      price: 2000,
      quantity: 3,
      
      }
      // {
      //   id: 10,
      //   name: 'Mi lu',
      //   description: 'Mi lu - description',
      //   image: 'https://sohanews.sohacdn.com/thumb_w/660/2019/7/12/md2-1562891851115558272486-crop-15628919196612015334639.jpg',
      //   price: 200,
      //   quantity: 3,
        
      //   }
]

removeProduct (id: number){
  console.log('ID truyen vao: '+id)
const productIndex = this.products.findIndex( product => product.id === id);
console.log('Vi tri cua sp: '+productIndex);

if (productIndex !== -1){
 alert('Da xoa san pham  ' + this.products[productIndex].name);
  this.products.splice(productIndex,1);

}

}


}

