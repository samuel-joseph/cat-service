import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient
  ) { }



  apiCall() {
    return this.http.get("https://api.thecatapi.com/v1/images/search")
  }

  apiCallStocks() {
    return this.http.get("https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?apiKey=fITlOHi7oQuFGcktkaA7ZPmpHOYD1xHC")
  }

  apiCallSpecificStocks(stock:string) {
    return this.http.get(`https://api.polygon.io/v2/aggs/ticker/${stock}/range/1/day/2020-06-01/2020-06-17?apiKey=fITlOHi7oQuFGcktkaA7ZPmpHOYD1xHC`)
  }

}
