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


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ConverterComponentComponent,
    CurrentRatesComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CurrCodeServiceService,
    CurrRatesService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
