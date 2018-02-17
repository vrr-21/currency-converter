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
import { Currency } from '../currency'
@Component({
  selector: 'app-converter-component',
  templateUrl: './converter-component.component.html',
  styleUrls: ['./converter-component.component.css']
})
export class ConverterComponentComponent implements OnInit {
  s_c_curr: string;
  s_c_value: number;
  d_c_curr: string;
  d_c_value: number;
  currencies: Currency[];
  constructor(private currency_code_service: CurrCodeServiceService)
  {
    this.s_c_value=0;
    this.d_c_value=this.s_c_value;
    this.currencies=[];
  }

  ngOnInit() {
    this.getCurrencyCodes()
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
                           .subscribe(result =>
                             for(var i=0;i<Object.keys(result).length;i++)
                             {
                               this.currencies.push(new Currency(result[Object.keys(result)[i]].code,result[Object.keys(result)[i]].name))
                             });
  }
  convertValue(): void
  {
    /*
      TODO: change the function cause this is WRONG.
    */
    this.d_c_value=this.s_c_value*61;
  }


}
