import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReversePipe } from './reverse.pipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
