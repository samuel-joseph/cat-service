import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-financial-stocks',
  templateUrl: './financial-stocks.component.html',
  styleUrls: ['./financial-stocks.component.css']
})
export class FinancialStocksComponent implements OnInit {
  companyName = "Apple"
  companyStock = "AAPI"
  text: string = "";
  stock: string = "";
  datas: any = [{}]
  constructor(private api: GetApiService) { }
  onChange(event: any) {
    this.text = event.target.value
    this.text = this.text.toLowerCase();
    this.companyName = this.text.toUpperCase();
  }

  getApi() {
    switch (this.text) {
      case "microsoft":
        this.stock = "MSFT"
        break;
      case "apple":
        this.stock = "AAPL"
        break;
      case "tesla":
        this.stock = "TSLA"
        break;
      case "samsung":
        this.stock = "KRW"
        break;
      case "amazon":
        this.stock = "AMZN"
        break;
      case "nintendo":
        this.stock = "NTDOY"
        break;
      case "disney":
        this.stock = "DIS"
        break;
    }
    this.api.apiCallSpecificStocks(this.stock).subscribe((response: any) => {
      this.datas = response.results;
      this.companyStock = response.ticker;
    })
  }

  ngOnInit(): void {
    this.api.apiCallStocks().subscribe((response: any) => {
      this.datas = response.results;
      this.companyStock = response.ticker
    })
  }

}
