import { Component, OnInit } from '@angular/core';
import { DataService } from "../../home/_service/data.service";
import { AlertService } from "../_service/alert.service";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  company: any = [{ com: 'Nike', type: 'Men Runner Shoes', price: '300' },
  { com: 'Nike', type: 'Sneakers', price: '120' },
  { com: 'Puma', type: 'Casual Sneakers', price: '420' },
  { com: 'Puma', type: 'Canvas Sneakers', price: '340' },
  { com: 'Puma', type: 'Black Studs', price: '583' },
  { com: 'Adidas', type: 'Blue Runner Shoes', price: '694' },
  { com: 'Puma', type: 'Sports Shoes', price: '234' },
  { com: 'Nike', type: 'White Runner Shoes', price: '984' }];
  constructor(
    private data: DataService,private alert : AlertService) { }

    price:any=1;
  message: any;
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
  quantity(e)
  {
    console.log(e.target.value);
    this.price = e.target.value;   
  }
  buy()
  {
    this.alert.success("your order is placed",true);
  }
}
