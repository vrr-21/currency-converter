import { Component, OnInit } from '@angular/core';
import { CurrRatesService } from '../curr-rates.service';
import { Currency } from '../currency';

@Component({
  selector: 'app-five-top',
  templateUrl: './five-top.component.html',
  styleUrls: ['./five-top.component.css']
})
export class FiveTopComponent implements OnInit {
  currency_rates: object;
  USD: Currency;
  EUR: Currency;
  GBP: Currency;
  INR: Currency;
  CAD: Currency;
  chosen_currencies: Currency[] = [];
  constructor(private currency_rate_service: CurrRatesService)
  {
    this.USD = new Currency("USD","US Dollar");
    this.chosen_currencies.push(this.USD);
    this.EUR = new Currency("EUR","Euro");
    this.chosen_currencies.push(this.EUR);
    this.GBP = new Currency("GBP","Great British Pound");
    this.chosen_currencies.push(this.GBP);
    this.INR = new Currency("INR","Indian Rupee");
    this.chosen_currencies.push(this.INR);
    this.CAD = new Currency("CAD","Canadian Dollar");
    this.chosen_currencies.push(this.CAD);
  }

  ngOnInit() {
    this.getCurrencyRates();
  }

  getCurrencyRates(): void
  {
    /**
    * This code gets the currency rates from the CurrRatesService, and
    * puts them into the currencies array.
    *
    * @param None
    * @return None
    */
    this.currency_rate_service.loadCurrencyRates()
                              .subscribe(result => this.currency_rates = result.rates);
  }

  getRate(to_curr: Currency, from_curr: Currency): number
  {
    return ((1/to_curr.getRate(this.currency_rates))*from_curr.getRate(this.currency_rates));
  }
}
