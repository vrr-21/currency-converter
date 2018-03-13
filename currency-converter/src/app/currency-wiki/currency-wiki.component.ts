import { Component, OnInit } from '@angular/core';
import { Currency } from '../currency';
import { CurrCodeServiceService } from '../curr-code-service.service';

@Component({
  selector: 'app-currency-wiki',
  templateUrl: './currency-wiki.component.html',
  styleUrls: ['./currency-wiki.component.css']
})
export class CurrencyWikiComponent implements OnInit {
  currencies: Currency[] = [];
  selected_currency: Currency;
  chosen_currency_number: string;
  chosen_currency_major_units: string;
  chosen_currency_minor_units: string; 
  chosen_currency_freq_bn: string;
  chosen_currency_rare_bn: string;
  chosen_currency_freq_cn: string;
  chosen_currency_rare_cn: string;

  constructor(private currency_code_service: CurrCodeServiceService)
  {

  }

  ngOnInit()
  {
    this.getCurrencyCodes();
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

  getCurrencyInfo(): void
  {
    this.currency_code_service.loadCurrencyInfo()
                           .subscribe(result =>{
                              this.chosen_currency_freq_bn = "";
                              this.chosen_currency_freq_cn = "";
                              this.chosen_currency_rare_bn = "";
                              this.chosen_currency_rare_cn = "";
                              this.chosen_currency_number = result[this.selected_currency.code].iso.number;
                              this.chosen_currency_major_units = result[this.selected_currency.code].units.major.name+" ("+result[this.selected_currency.code].units.major.symbol+")";
                              this.chosen_currency_minor_units = result[this.selected_currency.code].units.minor.name+" ("+result[this.selected_currency.code].units.minor.symbol+")";
                              for(var i=0;i<result[this.selected_currency.code].banknotes.frequent.length;i++)
                              {
                                this.chosen_currency_freq_bn += result[this.selected_currency.code].banknotes.frequent[i];
                                if(i!=result[this.selected_currency.code].banknotes.frequent.length-1)
                                  this.chosen_currency_freq_bn += ", ";
                              }
                              for(var i=0;i<result[this.selected_currency.code].banknotes.rare.length;i++)
                              {
                                this.chosen_currency_rare_bn += result[this.selected_currency.code].banknotes.rare[i];
                                if(i!=result[this.selected_currency.code].banknotes.rare.length-1)
                                  this.chosen_currency_rare_bn += ", ";
                              }
                              for(var i=0;i<result[this.selected_currency.code].coins.frequent.length;i++)
                              {
                                this.chosen_currency_freq_cn += result[this.selected_currency.code].coins.frequent[i];
                                if(i!=result[this.selected_currency.code].coins.frequent.length-1)
                                  this.chosen_currency_freq_cn += ", ";
                              }
                              for(var i=0;i<result[this.selected_currency.code].coins.rare.length;i++)
                              {
                                this.chosen_currency_rare_cn += result[this.selected_currency.code].coins.rare[i];
                                if(i!=result[this.selected_currency.code].coins.rare.length-1)
                                  this.chosen_currency_rare_cn += ", ";
                              }
                            });
  }
}
