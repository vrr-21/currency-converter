import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterComponentComponent } from './converter-component/converter-component.component';
import { CurrencyWikiComponent } from './currency-wiki/currency-wiki.component';

const routes: Routes = [
  { path: 'converter', component: ConverterComponentComponent },
  { path: 'wikicurrency', component: CurrencyWikiComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
