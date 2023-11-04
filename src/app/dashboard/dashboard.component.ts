import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  apiData: any;

  constructor(private api: ApiService) {
    this.getApi()
  }
  getApi() {
     this.api.getData().subscribe((res)=>{
      this.apiData = res
      console.log(res)

    })
    
  }
}
