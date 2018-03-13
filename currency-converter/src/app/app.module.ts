import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ConverterComponentComponent } from './converter-component/converter-component.component';
import { CurrentRatesComponentComponent } from './current-rates-component/current-rates-component.component';
import { CurrCodeServiceService } from './curr-code-service.service';
import { CurrRatesService } from './curr-rates.service';
import { AppRoutingModule } from './/app-routing.module';
import { CurrencyWikiComponent } from './currency-wiki/currency-wiki.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ConverterComponentComponent,
    CurrentRatesComponentComponent,
    CurrencyWikiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    CurrCodeServiceService,
    CurrRatesService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
