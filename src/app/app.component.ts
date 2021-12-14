import { Component } from '@angular/core';
import { GetApiService } from "./get-api.service"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


  
  
export class AppComponent {
  title = 'Chuck Norris Jokes';
  obj = {};
  text = "Chuck Norris Jokes";

  constructor(private api: GetApiService) {
    this.getQuote();
  }
  
  
  getQuote() {
    this.api.apiCall().subscribe((data: any) => {
      this.text = data.value
    })
  }
}
