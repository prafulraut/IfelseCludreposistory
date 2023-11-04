import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
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
