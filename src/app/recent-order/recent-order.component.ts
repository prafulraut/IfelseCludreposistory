import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recent-order',
  templateUrl: './recent-order.component.html',
  styleUrls: ['./recent-order.component.scss']
})
export class RecentOrderComponent {
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
  getStatusColur(status:any):any{
    switch(status){
      case 'Paid':
        return 'green-button';
        case 'Pending':
        return 'grey-button';
        case 'Failed':
        return 'red-button';
        default:
          return'default-button';
    }
  }
}
