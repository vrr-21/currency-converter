import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CurrRatesService {
  currency_rates: any
  constructor(public http: Http) { }
  loadCurrencyRates()
  {
    /**
    * This method loads the JSON file using the get function of the http module.
    * @param None
    * @return JSON data in type Observable
    */
    return this.http
      .get('https://openexchangerates.org/api/latest.json?app_id=6c1dcc1f4c8642cea6969127a4768346')
      .map(x => x.json() )
      .map( (data) =>this.currency_rates = data)
  }
}
