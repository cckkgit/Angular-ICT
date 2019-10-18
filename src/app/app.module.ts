import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { CartBodyComponent } from './cart-body/cart-body.component';
import { CartFooterComponent } from './cart-footer/cart-footer.component';

import {FormsModule} from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';

registerLocaleData(localeVi, 'vi');

@NgModule({
  declarations: [
    AppComponent,
    CartHeaderComponent,
    CartBodyComponent,
    CartFooterComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
