import { Component, OnInit } from '@angular/core';
import { ShopSingleComponent } from '../shop-single/shop-single.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent  {

  constructor(private user : UserService){



    
  }
  


}
