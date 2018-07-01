import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "../../home/_service/data.service";
declare var $: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router,
    private data: DataService) { }
    
  company: any = [{ com: 'Nike', type: 'Men Runner Shoes', price: '300' },
  { com: 'Nike', type: 'Sneakers', price: '120' },
  { com: 'Puma', type: 'Casual Sneakers', price: '420' },
  { com: 'Puma', type: 'Canvas Sneakers', price: '340' },
  { com: 'Puma', type: 'Black Studs', price: '583' },
  { com: 'Adidas', type: 'Blue Runner Shoes', price: '694' },
  { com: 'Puma', type: 'Sports Shoes', price: '234' },
  { com: 'Nike', type: 'White Runner Shoes', price: '984' }];
  
  ngOnInit() {
  }
  buy(i) {
    this.data.changeMessage(i)
    console.log("hey u clicked");
    this.router.navigate(['buy']);
  this.data.currentMessage.subscribe(message => {
      console.log("message =",message)
    });
  }
}
