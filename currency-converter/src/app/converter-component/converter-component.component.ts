/**
* This is the converter-component.
* It views the currency converter; the crux of the whole application.
* The ConverterComponentComponent class fetches the JSON data from the CurrCodeServiceService service to get all the
* currency codes and names. It also performs the conversion.
*
* @author Varun Rao
* @version 1.0
* @since 16-02-2017
*/
import { Component, OnInit } from '@angular/core';
import { CurrCodeServiceService } from '../curr-code-service.service';
import { Currency } from '../currency';
import { CurrRatesService } from '../curr-rates.service';

@Component({
  selector: 'app-converter-component',
  templateUrl: './converter-component.component.html',
  styleUrls: ['./converter-component.component.css']
})
export class ConverterComponentComponent implements OnInit {
  s_c_curr: Currency;
  s_c_value: number;
  d_c_curr: Currency;
  d_c_value: number;
  currencies: Currency[] = [];
  currency_rates: object;

  constructor(private currency_code_service: CurrCodeServiceService, private currency_rate_service: CurrRatesService)
  {
    this.s_c_value=0;
    this.d_c_value=this.s_c_value;
  }

  ngOnInit() {
    this.getCurrencyCodes()
    this.getCurrencyRates()
  }

  getCurrencyCodes(): void
  {
      /**
      * This code gets the currency codes from the CurrCodeServiceService, and
      * puts them into the currencies array.
      *
      * @param None
      * @return None
      */
      this.currency_code_service.loadCurrencyCodes()
                           .subscribe(result =>{
                             for(var i=0;i<Object.keys(result).length;i++)
                             {
                               this.currencies.push(new Currency(result[Object.keys(result)[i]].code,result[Object.keys(result)[i]].name))
                             }});
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

  switchCurrencies(): void
  {
      /** 
       * This function switches the two currencies.
       * It will swap only the currencies, not the values. 
       * After the currencies are swapped, the convertValue() is called so as to calculate the new currency value.
       * 
       * @param None
       * @return None
      */
      let inter_curr = this.s_c_curr;
      this.s_c_curr = this.d_c_curr;
      this.d_c_curr = inter_curr;
      this.convertValue();
  }

  convertValue(): void
  {
    /**
    * This function, as the name suggests, converts!
    * It takes the source currency, destination currency, and the source value, and uses the Currency class function
    * to get the rates.
    * Then it uses a formula to derive the rate:
    *
    * rate[s_c_curr->d_c_curr]=((1/rate[USD->s_c_curr])*rate[USD->d_c_curr])
    * Thus, we only use one base currency, and calculate the rate between *any* two currencies.
    *
    * @param None
    * @return None 
    */
    this.d_c_value=((1/this.s_c_curr.getRate(this.currency_rates))*this.d_c_curr.getRate(this.currency_rates))*this.s_c_value;
  }


}
