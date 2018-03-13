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

}
