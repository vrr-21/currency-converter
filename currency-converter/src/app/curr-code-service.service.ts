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
    return this.http
      .get('../assets/Common-Currency.json')
      .map(x => x.json() )
      .map( (data) =>this.currency_data = data)
  }

}
