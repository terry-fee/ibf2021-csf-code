import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart.component';
import { FontSizeComponent } from './components/font-size.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FontSizeComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
