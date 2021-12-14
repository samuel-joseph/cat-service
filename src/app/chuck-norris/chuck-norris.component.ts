import { Component, OnInit } from '@angular/core';
import { GetApiService } from "../get-api.service"

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.css']
})
export class ChuckNorrisComponent implements OnInit {
  text = "cats"
  image: string = "";
  constructor(private api: GetApiService) {
    this.getCat()
  }

  getCat() {
    this.api.apiCall().subscribe((data: any) => {
      this.image = data[0].url;
    })
  }
  ngOnInit(): void {
  }

}
