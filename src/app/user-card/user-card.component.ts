import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  apiData: any;
  constructor(private api: ApiService) {
    this.getApi()
  }
  getApi() {
    this.api.getData().subscribe((res) => {
      this.apiData = res
      console.log(res)
      

    })


  }
}
