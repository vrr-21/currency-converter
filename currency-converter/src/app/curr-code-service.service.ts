/**
* This service fetches data from a local JSON file and passes into an observable.
* Source of the JSON file: https://gist.github.com/Fluidbyte/2973986

* @author Varun Rao
* @version 1.0
* @since 17-02-2017
*/
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CurrCodeServiceService {
  currency_data: any
  constructor(public http: Http) { }
  loadCurrencyCodes()
  {
    /**
    * This method loads the JSON file using the get function of the http module.
    * @param None
    * @return JSON data in type Observable
    */
    return this.http
      .get('../assets/Common-Currency.json')
      .map(x => x.json() )
      .map( (data) =>this.currency_data = data)
  }

  loadCurrencyInfo()
  {
    /**
    * This method loads the JSON file using the get function of the http module.
    * @param None
    * @return JSON data in type Observable
    */
    return this.http
      .get('../assets/Currency-Info.json')
      .map(x => x.json() )
      .map( (data) =>this.currency_data = data)
  }
}
