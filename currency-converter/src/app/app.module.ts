import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ConverterComponentComponent } from './converter-component/converter-component.component';
import { CurrentRatesComponentComponent } from './current-rates-component/current-rates-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ConverterComponentComponent,
    CurrentRatesComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
