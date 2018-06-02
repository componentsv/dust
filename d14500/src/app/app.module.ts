import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerComponent
  ],
  imports     : [
    BrowserModule
  ],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
