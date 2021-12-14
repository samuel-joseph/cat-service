import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChuckNorrisComponent } from './chuck-norris/chuck-norris.component';
import { FinancialStocksComponent } from './financial-stocks/financial-stocks.component';


// export class ChuckNorris {
//   constructor {
    
//   }
// }

@NgModule({
  declarations: [
    AppComponent,
    ChuckNorrisComponent,
    FinancialStocksComponent,
  ],
  // imports: [
  //   BrowserModule,
  //   AppRoutingModule,
  //   HttpClientModule
  // ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'chuck-norris', component: ChuckNorrisComponent},
      {path: 'financial-stocks', component: FinancialStocksComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
