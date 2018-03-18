import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterComponentComponent } from './converter-component/converter-component.component';
import { CurrencyWikiComponent } from './currency-wiki/currency-wiki.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { FiveTopComponent } from './five-top/five-top.component'

const routes: Routes = [
  { path: 'converter', component: ConverterComponentComponent },
  { path: 'wikicurrency', component: CurrencyWikiComponent },
  { path: 'historic-rates', component: UnderConstructionComponent },
  { path: 'five-top-rates', component: FiveTopComponent },
  { path: 'devs', component: UnderConstructionComponent },
  { path: 'wikicurrency/:currency_code', component: CurrencyWikiComponent },
  { path: '', redirectTo: '/converter', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
